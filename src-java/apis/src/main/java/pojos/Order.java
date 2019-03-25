package pojos;

import com.google.gson.annotations.SerializedName;

public class Order {

	@SerializedName("orderId")
	private int orderId;

	@SerializedName("deliveryDetails")
	private DeliveryDetails deliveryDetails;

	@SerializedName("orderSummary")
	private OrderSummary orderSummary;

	@SerializedName("restaurantId")
	private int restaurantId;

	@SerializedName("user")
	private String user;

	public void setOrderId(int orderId){
		this.orderId = orderId;
	}

	public int getOrderId(){
		return orderId;
	}

	public void setDeliveryDetails(DeliveryDetails deliveryDetails){
		this.deliveryDetails = deliveryDetails;
	}

	public DeliveryDetails getDeliveryDetails(){
		return deliveryDetails;
	}

	public void setOrderSummary(OrderSummary orderSummary){
		this.orderSummary = orderSummary;
	}

	public OrderSummary getOrderSummary(){
		return orderSummary;
	}

	public void setRestaurantId(int restaurantId){
		this.restaurantId = restaurantId;
	}

	public int getRestaurantId(){
		return restaurantId;
	}

	public void setUser(String user){
		this.user = user;
	}

	public String getUser(){
		return user;
	}

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