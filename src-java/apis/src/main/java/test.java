import com.mongodb.client.*;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

import static spark.Spark.*;

public class test {
    public static void main(String[] args){

        port(8080);

        /*
        * Enable CORS (Cross Origin Resource Sharing). Allows foreign domains to request necessary
        * resources, or in our case, allows the React to have access to my response returned by get.
        */
        options("/*",
                (request, response) -> {

                    String accessControlRequestHeaders = request
                            .headers("Access-Control-Request-Headers");
                    if (accessControlRequestHeaders != null) {
                        response.header("Access-Control-Allow-Headers",
                                accessControlRequestHeaders);
                    }

                    String accessControlRequestMethod = request
                            .headers("Access-Control-Request-Method");
                    if (accessControlRequestMethod != null) {
                        response.header("Access-Control-Allow-Methods",
                                accessControlRequestMethod);
                    }

                    return "OK";
                });

        /*
         * Enable CORS prior to any routes being created.
         */
        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));


        get("/hello", (req, res) -> "Hello World from Spark!!!");

        // matches "GET /hello/foo" and "GET /hello/bar"
        // request.params(":name") is 'foo' or 'bar'
        get("/hello/:name", (request, response) -> {
            String name = request.params(":name");
            return "Hello: " + name + "!";
        });

        get("/RPIEats", (request, response) -> {
            //String name = request.params(":name");
            //response.type("application/json");
            response.body("Hello RPIEats");
            return response;
        });

        get("/restaurants", (request, response) -> {

            MongoClient mongoClient = MongoClients.create("mongodb://dev-team:<PASSWORD>@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
            MongoDatabase database = mongoClient.getDatabase("rpieats");
            MongoCollection<Document> collection = database.getCollection("restaurants");
            List<String> items = new ArrayList<>();
            MongoCursor<Document> cursor = collection.find().iterator();

            try{
                while (cursor.hasNext()){
                    items.add(cursor.next().toJson());
                }
            }finally {
                cursor.close();
            }

            response.header("Content-Type","application/json");
            return items;
        });
    }
}