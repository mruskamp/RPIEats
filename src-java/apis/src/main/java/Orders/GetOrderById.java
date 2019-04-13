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
import utils.GsonSingleton;

import java.util.ArrayList;
import java.util.List;

//Class that implements the route that pulls an order based on the ID
public class GetOrderById  implements Route {

    //Connecting to our DB
    private String num = "";
    MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
    MongoDatabase database = mongoClient.getDatabase("rpieats");

    /* Method that returns an order based on the ID, passed via request
     * @ Parameters: None, but request's parameters should include the userID
     * @ Return: JSonObject, which represents the order
     * @Throws: None
     */
    public  static Route getOrderByIdInstance(){
        return new GetOrderById();
    }
    @Override
    public Object handle(Request request, Response response) {

        MongoCollection<Document> collection = database.getCollection("orders");
        BasicDBObject query = new BasicDBObject();

        //See if the ID exists
        if(request.params(":id") == null)
            return "No order";

        //Search for the order using the ID in our DB
        query.put("orderId", request.params(":id"));
        Document cursor = collection.find(query).first();

        JsonObject jsonObject = GsonSingleton.getInstance().toJsonTree(cursor).getAsJsonObject();
        response.header("Content-Type","application/json");
        return jsonObject;
    }
}


