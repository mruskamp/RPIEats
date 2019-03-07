import java.util.ArrayList;

public class MenuItem {

    private String name;
    private Double price;
    private String description;

    /*
     * Constructor(s)
     */
    public MenuItem() {

    }

    /*
     * Getters and setters
     */
    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
