import static spark.Spark.*;

public class test {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
    }
}