import static spark.Spark.get;

public class test {
    public static void main(String[] args){
        get("/hello", (req, res) -> "Hello World from Spark!!!");
    }
}