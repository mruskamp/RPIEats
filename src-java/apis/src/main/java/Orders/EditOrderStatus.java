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


import com.mongodb.ServerAddress;

import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;

import org.bson.Document;
import java.util.Arrays;
import com.mongodb.Block;

import com.mongodb.client.MongoCursor;
import static com.mongodb.client.model.Filters.*;
import com.mongodb.client.result.DeleteResult;
import static com.mongodb.client.model.Updates.*;
import com.mongodb.client.result.UpdateResult;
import java.util.ArrayList;
import java.util.List;

import java.util.ArrayList;
import java.util.List;

public class EditOrderStatus  implements Route {

    private String num = "";
    MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
    MongoDatabase database = mongoClient.getDatabase("rpieats");
    List<Document> restaurantInfo = new ArrayList<>();
    List<Document> orderInfo = new ArrayList<>();

    public  static Route getEditOrderInstance(){
        return new EditOrderStatus();
    }
    @Override
    public Object handle(Request request, Response response) {
        Gson gson = new Gson();

        MongoCollection<Document> collection = database.getCollection("orders");
        BasicDBObject query = new BasicDBObject();

        if(request.params(":id") == null)
            return "No order";

        collection.updateOne(eq("_id", request.params(":id")), new Document("$set", new Document("status", request.params(":status"))));

        query.put("orderId", request.params(":id"));
        Document cursor = collection.find(query).first();

        JsonObject jsonObject = gson.toJsonTree(cursor).getAsJsonObject();
        response.header("Content-Type","application/json");

        return jsonObject;
    }
}


