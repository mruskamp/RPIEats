package Orders;

import com.mongodb.BasicDBObject;
import com.mongodb.client.*;
import org.bson.Document;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.ArrayList;
import java.util.List;

//Class that implements the route that pulls an order based on the user's ID
public class GetOrdersByCustomer implements Route {

    //Connecting to our DB

    List<Document> orderArray = new ArrayList<>();

    /* Method that returns an order based on the user's ID, passed via request
     * @ Parameters: None, but request's parameters should include the userID
     * @ Return: List<String> that represents the items in the customers order
     * @Throws: None
     */
    public  static Route getOrdersByCustomerInstance(){
        return new GetOrdersByCustomer();
    }
    @Override
    public Object handle(Request request, Response response) {
        MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
        MongoDatabase database = mongoClient.getDatabase("rpieats");

        MongoCollection<Document> collection = database.getCollection("orders");
        BasicDBObject query = new BasicDBObject();

        //If the user's ID is not found, then there's no order.
        if(request.params(":customerId") == null)
            return "No order";
        //Otherwise, search for it in our DB

        if(request.params(":type").equals("C"))
        query.put("user", request.params(":customerId"));
        else {
            query.put("deliveredBy", request.params(":customerId"));
        }


        MongoCursor<Document> cursor = collection.find(query).iterator();
        List<String> items = new ArrayList<>();

        //and add all the items in our DB to our returned List<String>
        try{
            while (cursor.hasNext()){
                Document nextOrder = cursor.next();
                items.add(nextOrder.toJson());
                orderArray.add(nextOrder);
            }
        }finally {
            cursor.close();
            mongoClient.close();
        }

        response.header("Content-Type","application/json");

        return items;
    }
}
