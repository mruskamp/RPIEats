package pojos;

import com.google.gson.annotations.SerializedName;

//Class that represents the actual order of the customer, using OrderSummary, ItemDetailsItem, and DeliveryDetails
public class Order {

	//Represents the unique ID of the order of the customer
	@SerializedName("orderId")
	private int orderId;

	//Represents the delivery information of the customer
	@SerializedName("deliveryDetails")
	private DeliveryDetails deliveryDetails;

	//Represents the summary of the order, including quantities, items, and so on
	@SerializedName("orderSummary")
	private OrderSummary orderSummary;

	//The unique ID of the restaurant
	@SerializedName("restaurantId")
	private int restaurantId;

	//The username of our customer
	@SerializedName("user")
	private String user;

	/* Method that sets the unique ID of this particular order
	 * @ Parameters: int that represents the order ID
	 * @ Return: None
	 * @Throws: None
	 */
	public void setOrderId(int orderId){
		this.orderId = orderId;
	}

	/* Method that gets the ID of this order
	 * @ Parameters: None
	 * @ Return: int that represents the order ID
	 * @Throws: None
	 */
	public int getOrderId(){
		return orderId;
	}

	/* Method that sets delivery information of the customer
	 * @ Parameters: DeliveryTails object that holds the name, phone number and address of the customer
	 * @ Return: None
	 * @Throws: None
	 */
	public void setDeliveryDetails(DeliveryDetails deliveryDetails){
		this.deliveryDetails = deliveryDetails;
	}

	/* Method that sets delivery information of the customer
	 * @ Parameters: None
	 * @ Return: DeliveryTails object that holds the name, phone number and address of the customer
	 * @Throws: None
	 */
	public DeliveryDetails getDeliveryDetails(){
		return deliveryDetails;
	}

	/* Method that sets the order summary
	 * @ Parameters: OrderSummary object that represents the orderSummary
	 * @ Return: None
	 * @Throws: None
	 */
	public void setOrderSummary(OrderSummary orderSummary){
		this.orderSummary = orderSummary;
	}

	/* Method that gets the order summary
	 * @ Parameters: None
	 * @ Return: OrderSummary object that represents the orderSummary
	 * @Throws: None
	 */
	public OrderSummary getOrderSummary(){
		return orderSummary;
	}

	/* Method that sets the restaurant ID from where the customer is ordering from
	 * @ Parameters: the ID of the restaurant
	 * @ Return: DeliveryTails object that holds the name, phone number and address of the customer
	 * @Throws: None
	 */
	public void setRestaurantId(int restaurantId){
		this.restaurantId = restaurantId;
	}

	/* Method that gets the restaurant ID
	 * @ Parameters: None
	 * @ Returns: int that represents the ID of the restaurant
	 * @Throws: None
	 */
	public int getRestaurantId(){
		return restaurantId;
	}

	/* Method that sets the username of the customer
	 * @ Parameters: String that represents the username
	 * @ Returns: None
	 * @Throws: None
	 */
	public void setUser(String user){
		this.user = user;
	}

	/* Method that gets the username of the customer
	 * @ Parameters: None
	 * @ Returns: String that represents the username
	 * @Throws: None
	 */
	public String getUser(){
		return user;
	}

	/* Method that returns the Order information as a string
	 * @ Parameters: None
	 * @ Return: String that represents the information of the Order object
	 * @Throws: None
	 */
	@Override
 	public String toString(){
		return 
			"pojos.Order{" +
			"orderId = '" + orderId + '\'' + 
			",deliveryDetails = '" + deliveryDetails + '\'' + 
			",orderSummary = '" + orderSummary + '\'' + 
			",restaurantId = '" + restaurantId + '\'' + 
			",user = '" + user + '\'' + 
			"}";
		}
}