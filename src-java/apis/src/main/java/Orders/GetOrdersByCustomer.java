package Orders;

import com.mongodb.BasicDBObject;
import com.mongodb.client.*;
import org.bson.Document;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.ArrayList;
import java.util.List;

public class GetOrdersByCustomer implements Route {

    MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
    MongoDatabase database = mongoClient.getDatabase("rpieats");
    List<Document> orderArray = new ArrayList<>();

    public  static Route getOrdersByCustomerInstance(){
        return new GetOrdersByCustomer();
    }
    @Override
    public Object handle(Request request, Response response) {

        MongoCollection<Document> collection = database.getCollection("orders");
        BasicDBObject query = new BasicDBObject();

        if(request.params(":userId") == null)
            return "No order";
        query.put("user", request.params(":userId"));

        MongoCursor<Document> cursor = collection.find(query).iterator();
        List<String> items = new ArrayList<>();

        try{
            while (cursor.hasNext()){
                Document nextOrder = cursor.next();
                items.add(nextOrder.toJson());
                orderArray.add(nextOrder);
            }
        }finally {
            cursor.close();
        }

        response.header("Content-Type","application/json");

        return items;
    }
}
