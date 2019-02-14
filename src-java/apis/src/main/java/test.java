import static spark.Spark.*;

public class test {
    public static void main(String[] args){

        port(8080);

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