import java.util.ArrayList;
import java.util.Date;

public class Order {
    private ArrayList<MenuItem> orderContents;
    private Date orderTime;
    private User deliverer;
    private User orderer;

    /*
     * Constructor(s)
     */
    public Order() {

    }

    /*
     * Getters and setters
     */
    public ArrayList<MenuItem> getOrder() { return orderContents; }

    public Date getOrderTime() { return orderTime; }

    public User getDeliverer() { return deliverer; }

    public User getOrderer() { return orderer; }

    public void setOrderContents(ArrayList<MenuItem> orderContents) { this.orderContents = orderContents; }

    public void setOrderTime(Date orderTime) { this.orderTime = orderTime; }

    public void setDeliverer(User deliverer) { this.deliverer = deliverer; }

    public void setOrderer(User orderer) { this.orderer = orderer; }


    /*
     * Public  Methods
     */
    public void dropItem() {

    }

    public void addItem()  {

    }
}
