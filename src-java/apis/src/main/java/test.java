import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.BasicDBObject;
import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;
import pojos.ItemDetailsItem;
import pojos.Order;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;
import static spark.Spark.*;

public class test {

    public static String getRestaurantStatus(Document restaurant) {
        String hours = restaurant.getString("hours");
        String[] openAndClose = hours.split("-");
        String open = openAndClose[0]; String close = openAndClose[1];
        Time openTime = new Time(Integer.parseInt(open.split(":")[0]), Integer.parseInt(open.split(":")[1]), 0);
        Time closeTime = new Time(Integer.parseInt(close.split(":")[0]), Integer.parseInt(close.split(":")[1]), 0);
        Date timeNow = new Date();
        Time now = new Time(timeNow.getHours(), timeNow.getMinutes(), timeNow.getSeconds());

        if(now.after(openTime) && now.before(closeTime)) {
            return "Open";
        }
        return "Closed";
    }

    public static void main(String[] args){

        port(8080);

        MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
        MongoDatabase database = mongoClient.getDatabase("rpieats");
        List<Document> restaurantInfo = new ArrayList<>();
        List<Document> orderInfo = new ArrayList<>();

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

        //Restaurants landing page
        get("/restaurants", (request, response) -> {

            MongoCollection<Document> collection = database.getCollection("restaurants");
            MongoCursor<Document> cursor = collection.find().iterator();
            List<String> items = new ArrayList<>();

            try{
                while (cursor.hasNext()){
                    Document nextRestaurant = cursor.next();
                    nextRestaurant.put("status", getRestaurantStatus(nextRestaurant));
                    items.add(nextRestaurant.toJson());
                    restaurantInfo.add(nextRestaurant);
                }
            }finally {
                cursor.close();
            }

            response.header("Content-Type","application/json");

            return items;
        });

        /*
        * Return info for a page for each restaurant where the menu etc can be found
        * after the user has chosen one
        */
        get("/restaurants/:name", (request, response) -> {

            String name = request.params(":name");
            for(Document restaurant: restaurantInfo) {
                if(restaurant.get("name").toString().equals(name)) {
                    return restaurant;
                };
            }
            return "Could not find restaurant: " + name;
        });

        post("/order/create",(request, response) -> {


            Gson gson = new Gson();

            JsonParser parser = new JsonParser();
            JsonObject requestObj = parser.parse(request.body()).getAsJsonObject();

            Order createRequest = gson.fromJson(request.body(), Order.class);

            MongoCollection collection = database.getCollection("orders");

            Document order = new Document();


            String orderId = new ObjectId().toHexString();
            order.put("_id",orderId);
            order.put("orderId",orderId);
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
        });

        get("/orders/active",((request, response) -> {

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
        }));
    }
}