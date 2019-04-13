package Orders;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.BasicDBObject;
import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;
import pojos.ItemDetailsItem;
import pojos.Order;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.ArrayList;
import java.util.List;

//Class that pulls all active orders from our DB
public class GetActiveOrders  implements Route {

    //Connecting to our DB
    private String num = "";
    MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
    MongoDatabase database = mongoClient.getDatabase("rpieats");
    List<Document> orderInfo = new ArrayList<>();

    /* Method that returns all current orders that need to be satisfied
     * @ Parameters: None
     * @ Return: List<String> that represents the active orders
     * @Throws: None
     */
    public  static Route getActiveOrdersInstance(){
        return new GetActiveOrders();
    }
    @Override
    public Object handle(Request request, Response response) {

        //Search for all orders that have an active status
        MongoCollection<Document> collection = database.getCollection("orders");
        BasicDBObject query = new BasicDBObject();
        query.put("status", "ACTIVE");
        MongoCursor<Document> cursor = collection.find(query).iterator();
        List<String> items = new ArrayList<>();

        //Add all the orders that have an active status to our returned list
        try{
            while (cursor.hasNext()){
                Document nextOrder = cursor.next();
                items.add(nextOrder.toJson());
                orderInfo.add(nextOrder);
            }
        }finally {
            cursor.close();
        }

        response.header("Content-Type","application/json");

        return items;
    }
}


