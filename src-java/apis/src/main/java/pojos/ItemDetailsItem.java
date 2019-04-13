package pojos;

import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;

//Class that represents a menu item
@Generated("com.robohorse.robopojogenerator")
public class ItemDetailsItem{

	//The unit price of the menu item
	@SerializedName("unitPrice")
	private double unitPrice;

	//The total price of quantity of this menu item that was ordered
	@SerializedName("totalPrice")
	private double totalPrice;

	//How many of this menu item were ordered
	@SerializedName("qty")
	private int qty;

	//The name of the menu item
	@SerializedName("name")
	private String name;

	//The id of the menu item
	@SerializedName("id")
	private int id;

	/* Method that sets the unit price of the item (ex, the unit price of 1 cookie is $1.00)
	 * @ Parameters: int that represents the unit price
	 * @ Return: None
	 * @Throws: None
	 */
	public void setUnitPrice(double unitPrice){
		this.unitPrice = unitPrice;
	}

	/* Method that gets the unit price of the item
	 * @ Parameters: None
	 * @ Return: int that represents the unit price
	 * @Throws: None
	 */
	public double getUnitPrice(){
		return unitPrice;
	}

	/* Method that sets the total price of item, (ex, the unit price of 1 cookie is $1.00 X quantity of 5 = $5 total price)
	 * @ Parameters: int that represents the total price
	 * @ Return: None
	 * @Throws: None
	 */
	public void setTotalPrice(double totalPrice){
		this.totalPrice = totalPrice;
	}

	/* Method that gets the total price of item
	 * @ Parameters: None
	 * @ Return: int that represents the total price
	 * @Throws: None
	 */
	public double getTotalPrice(){
		return totalPrice;
	}

	/* Method that sets the quantity of the item
	 * @ Parameters: int that represents the quantity
	 * @ Return: None
	 * @Throws: None
	 */
	public void setQty(int qty){
		this.qty = qty;
	}

	/* Method that gets the quantity of the item
	 * @ Parameters: None
	 * @ Return: int that represents the quantity
	 * @Throws: None
	 */
	public int getQty(){
		return qty;
	}

	/* Method that sets the name of the menu item
	 * @ Parameters: String that represents the name
	 * @ Return: None
	 * @Throws: None
	 */
	public void setName(String name){
		this.name = name;
	}

	/* Method that gets the name of the menu item
	 * @ Parameters: None
	 * @ Return: String that represents the name
	 * @Throws: None
	 */
	public String getName(){
		return name;
	}

	/* Method that sets the ID of the item
	 * @ Parameters: int that represents the ID of the item
	 * @ Return: None
	 * @Throws: None
	 */
	public void setId(int id){
		this.id = id;
	}

	/* Method that gets the ID of the item
	 * @ Parameters: None
	 * @ Return: int that represents the the ID of the item
	 * @Throws: None
	 */
	public int getId(){
		return id;
	}

	/* Method that returns the information of the ItemDetailsItem object as a string
	 * @ Parameters: None
	 * @ Return: String that represents the ItemDetailsItem object
	 * \|||||
	 * @Throws: None
	 */
	@Override
 	public String toString(){
		return 
			"pojos.ItemDetailsItem{" +
			"unitPrice = '" + unitPrice + '\'' + 
			",totalPrice = '" + totalPrice + '\'' + 
			",qty = '" + qty + '\'' + 
			",name = '" + name + '\'' + 
			",id = '" + id + '\'' + 
			"}";
		}
}