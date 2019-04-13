package pojos;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;
import pojos.ItemDetailsItem;

//Class that represents a summary of the order
@Generated("com.robohorse.robopojogenerator")
public class OrderSummary{

	//The name of the vendor that the customer is ordering from
	@SerializedName("vendor")
	private String vendor;

	//The list of foods that are being ordered
	@SerializedName("itemDetails")
	private List<ItemDetailsItem> itemDetails;

	//The location of the order
	@SerializedName("location")
	private String location;

	//The fee of having the order delivered
	@SerializedName("deliveryFee")
	private int deliveryFee;

	//The total tax on the order
	@SerializedName("tax")
	private int tax;

	//The subtotal of the order
	@SerializedName("subTotal")
	private int subTotal;

	//The total cost of the order
	@SerializedName("orderTotal")
	private int orderTotal;

	/* Method that sets the vendor of the order
	 * @ Parameters: String that represents the vendor
	 * @ Return: None
	 * @Throws: None
	 */
	public void setVendor(String vendor){
		this.vendor = vendor;
	}

	/* Method that gets the name of the vendor of this order
	 * @ Parameters: None
	 * @ Return: String that represents the vender name
	 * @Throws: None
	 */
	public String getVendor(){
		return vendor;
	}

	/* Method that sets the details of the order
	 * @ Parameters: List of <ItemDetailsItem> that represents various food/drink items of the order
	 * @ Return: None
	 * @Throws: None
	 */
	public void setItemDetails(List<ItemDetailsItem> itemDetails){
		this.itemDetails = itemDetails;
	}

	/* Method that gets the list of items that this order represents
	 * @ Parameters: None
	 * @ Return: List of <ItemDetailsItem> that represents various food/drink items of the order
	 * @Throws: None
	 */
	public List<ItemDetailsItem> getItemDetails(){
		return itemDetails;
	}

	/* Method that sets the location of the order
	 * @ Parameters: String that represents the location
	 * @ Return: None
	 * @Throws: None
	 */
	public void setLocation(String location){
		this.location = location;
	}

	/* Method that gets the location of the order
	 * @ Parameters: None
	 * @ Return: String that represents the location of the order
	 * @Throws: None
	 */
	public String getLocation(){
		return location;
	}

	/* Method that sets the tax of the order
	 * @ Parameters: int that represents the tax
	 * @ Return: None
	 * @Throws: None
	 */
	public void setTax(int tax){
		this.tax = tax;
	}

	/* Method that gets the tax of the order
	 * @ Parameters: None
	 * @ Return: int that represents the tax
	 * @Throws: None
	 */
	public int getTax(){
		return tax;
	}

	/* Method that sets the subtotal of the order
	 * @ Parameters: int that represents the subtotal
	 * @ Return: None
	 * @Throws: None
	 */
	public void setSubTotal(int subTotal){
		this.subTotal = subTotal;
	}

	/* Method that gets the subtotal of the order
	 * @ Parameters: None
	 * @ Return: int that represents the subtotal
	 * @Throws: None
	 */
	public int getSubTotal(){
		return subTotal;
	}

	/* Method that sets the total of the order
	 * @ Parameters: int that represents the total cost of the order
	 * @ Return: None
	 * @Throws: None
	 */
	public void setOrderTotal(int orderTotal){
		this.orderTotal = orderTotal;
	}

	/* Method that gets the total of the order
	 * @ Parameters: None
	 * @ Return: int that represents the total cost of the order
	 * @Throws: None
	 */
	public int getOrderTotal(){
		return orderTotal;
	}

	/* Method that sets the delivery fee of the order
	 * @ Parameters: int that represents the delivery fee
	 * @ Return: None
	 * @Throws: None
	 */
	public void setDeliveryFee(int deliveryFee){
		this.deliveryFee = deliveryFee;
	}

	/* Method that gets the delivery fee of the order
	 * @ Parameters: None
	 * @ Return: int that represents the delivery fee
	 * @Throws: None
	 */
	public int getDeliveryFee(){
		return deliveryFee;
	}

	/* Method that allows an OrderSummary object to be represented as a string
	 * @ Parameters: None
	 * @ Return: String that represents an OrderSummary object
	 * @Throws: None
	 */
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