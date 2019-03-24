package pojos;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;
import pojos.ItemDetailsItem;

@Generated("com.robohorse.robopojogenerator")
public class OrderSummary{

	@SerializedName("vendor")
	private String vendor;

	@SerializedName("itemDetails")
	private List<ItemDetailsItem> itemDetails;

	@SerializedName("location")
	private String location;

	@SerializedName("deliveryFee")
	private int deliveryFee;

	@SerializedName("tax")
	private int tax;

	@SerializedName("subTotal")
	private int subTotal;

	@SerializedName("orderTotal")
	private int orderTotal;

	public void setVendor(String vendor){
		this.vendor = vendor;
	}

	public String getVendor(){
		return vendor;
	}

	public void setItemDetails(List<ItemDetailsItem> itemDetails){
		this.itemDetails = itemDetails;
	}

	public List<ItemDetailsItem> getItemDetails(){
		return itemDetails;
	}

	public void setLocation(String location){
		this.location = location;
	}

	public String getLocation(){
		return location;
	}

	public void setTax(int tax){
		this.tax = tax;
	}

	public int getTax(){
		return tax;
	}

	public void setSubTotal(int subTotal){
		this.subTotal = subTotal;
	}

	public int getSubTotal(){
		return subTotal;
	}

	public void setOrderTotal(int orderTotal){
		this.orderTotal = orderTotal;
	}

	public int getOrderTotal(){
		return orderTotal;
	}

	public void setDeliveryFee(int deliveryFee){
		this.deliveryFee = deliveryFee;
	}

	public int getDeliveryFee(){
		return deliveryFee;
	}


	@Override
 	public String toString(){
		return 
			"pojos.OrderSummary{" +
			"vendor = '" + vendor + '\'' + 
			",itemDetails = '" + itemDetails + '\'' + 
			",location = '" + location + '\'' + 
			",tax = '" + tax + '\'' + 
			",subTotal = '" + subTotal + '\'' + 
			",orderTotal = '" + orderTotal + '\'' + 
			"}";
		}
}