import Orders.EditOrderStatus;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.BasicDBObject;
import com.mongodb.client.*;
import org.bson.Document;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static Orders.CreateOrder.createOrderInstance;
import static Orders.EditOrderStatus.getEditOrderInstance;
import static Orders.GetActiveOrders.getActiveOrdersInstance;
import static Orders.GetOrderById.getOrderByIdInstance;
import static Orders.GetOrdersByCustomer.getOrdersByCustomerInstance;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;
import static com.mongodb.client.model.Filters.*;
import static spark.Spark.*;

//This class serves as our main class, where RPIEats is ran
public class Server {

    /* Method that gets the status of a given restaurant, meaning if they're open or closed
     * @ Parameters: Document that represents the restaurant
     * @ Return: String that represents if the restaurant is open or closed
     * @Throws: None
     */
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

    //Main function
    public static void main(String[] args){

        //For our front-end to connect to
        port(8080);

        //Initialize our DB

        List<Document> restaurantInfo = new ArrayList<>();

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


        //Restaurants landing page
        get("/restaurants", (request, response) -> {
            MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
            MongoDatabase database = mongoClient.getDatabase("rpieats");
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
                mongoClient.close();
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

        post("/login", (request,response) -> {
            MongoClient mongoClient = MongoClients.create("mongodb://dev-team:RPIEATS@cluster0-shard-00-00-s62mb.mongodb.net:27017,cluster0-shard-00-01-s62mb.mongodb.net:27017,cluster0-shard-00-02-s62mb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
            MongoDatabase database = mongoClient.getDatabase("rpieats");

            JsonParser parser = new JsonParser();
            JsonObject requestObj = parser.parse(request.body()).getAsJsonObject();
            MongoCollection<Document> collection = database.getCollection("users");

            Document userDoc = collection.find(eq("userName", requestObj.get("username").getAsString())).first();

            User userAccount = new User(requestObj.get("username").getAsString(), requestObj.get("password").getAsString(), requestObj.get("userType").getAsString());
            System.out.println(userAccount.getUsername() + " " +  userAccount.getPassword() + " " + userAccount.getAccountType());
            mongoClient.close();
            return response;
        });

        post("/order/create",(request,response) -> createOrderInstance().handle(request,response));

        get("/orders/active",(request,response) -> getActiveOrdersInstance().handle(request,response));

        get("/orders/:id",(request,response) -> getOrderByIdInstance().handle(request,response));

        get("/order/edit/:id/:status/:editedBy", (request, response) -> getEditOrderInstance().handle(request,response));

        get("/orders/customer/:type/:customerId",(request,response) -> getOrdersByCustomerInstance().handle(request,response));




        
    }
}