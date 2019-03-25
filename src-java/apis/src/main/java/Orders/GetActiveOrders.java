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

public class GetActiveOrders  implements Route {

    private String num = "";
    MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
    MongoDatabase database = mongoClient.getDatabase("rpieats");
    List<Document> orderInfo = new ArrayList<>();

    public  static Route getActiveOrdersInstance(){
        return new GetActiveOrders();
    }
    @Override
    public Object handle(Request request, Response response) {

        MongoCollection<Document> collection = database.getCollection("orders");
        BasicDBObject query = new BasicDBObject();
        query.put("status", "ACTIVE");
        MongoCursor<Document> cursor = collection.find(query).iterator();
        List<String> items = new ArrayList<>();

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


