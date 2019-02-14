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
    }
}