package Orders;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
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

public class CreateOrder implements Route {

    private String num = "";
    MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
    MongoDatabase database = mongoClient.getDatabase("rpieats");
    List<Document> restaurantInfo = new ArrayList<>();
    List<Document> orderInfo = new ArrayList<>();

    public  static Route createOrderInstance(){
        return new CreateOrder();
    }
    @Override
    public Object handle(Request request, Response response) {

        JsonParser parser = new JsonParser();
        JsonObject requestObj = parser.parse(request.body()).getAsJsonObject();


        Order createRequest = GsonSingleton.getInstance().fromJson(request.body(), Order.class);

        MongoCollection collection = database.getCollection("orders");

        Document order = new Document();

        String orderId = new ObjectId().toHexString();
        order.put("_id",orderId);
        order.put("orderId",orderId);
        order.put("status","ACTIVE");
        order.put("restaurantId",createRequest.getRestaurantId());
        order.put("user",createRequest.getUser());

        Document deliveryDetails = new Document();
        deliveryDetails.put("deliverTo",requestObj.get("deliveryDetails").getAsJsonObject().get("deliverTo").getAsString());
        deliveryDetails.put("name", requestObj.get("deliveryDetails").getAsJsonObject().get("name").getAsString());
        deliveryDetails.put("phone",requestObj.get("deliveryDetails").getAsJsonObject().get("phone").getAsString());
        order.put("deliveryDetails",deliveryDetails);

        Document orderSummary = new Document();
        orderSummary.put("vendor",createRequest.getOrderSummary().getVendor());
        orderSummary.put("location",createRequest.getOrderSummary().getLocation());
        orderSummary.put("subTotal",createRequest.getOrderSummary().getSubTotal());
        orderSummary.put("tax",createRequest.getOrderSummary().getTax());
        orderSummary.put("deliveryFee",createRequest.getOrderSummary().getDeliveryFee());
        orderSummary.put("total",createRequest.getOrderSummary().getOrderTotal());

        List<Document> itemList = new ArrayList<>();
        for(int i = 0; i < createRequest.getOrderSummary().getItemDetails().size();i++){
            Document item =  new Document();
            ItemDetailsItem listitem = createRequest.getOrderSummary().getItemDetails().get(i);
            item.put("id",listitem.getId());
            item.put("name",listitem.getName());
            item.put("unitPrice",listitem.getQty());
            item.put("qty",listitem.getQty());
            item.put("totalPrice",listitem.getTotalPrice());
            itemList.add(item);
        }
        orderSummary.put("itemDetails",itemList);

        order.put("orderSummary",orderSummary);
        try{

            collection.insertOne(order);

        }catch (Exception e){
            System.out.println(e);
        }

        return orderId;
    }
}