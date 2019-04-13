package pojos;

import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;

/* Class that represents the information of who the delivery person is delivering to
 */
@Generated("com.robohorse.robopojogenerator")
public class DeliveryDetails{

	//The phone number of the customer
	@SerializedName("phone")
	private String phone;

	//The name of the customer
	@SerializedName("name")
	private String name;

	//The address of the customer
	@SerializedName("deliverTo")
	private String deliverTo;

	/* Method that sets the phone number of who the delivery person is delivering to
	 * @ Parameters: String that represents the phone number
	 * @ Return: None
	 * @Throws: None
	 */
	public void setPhone(String phone){
		this.phone = phone;
	}

	/* Method that gets the phone number of who the delivery person is delivering to
	 * @ Parameters: None
	 * @ Return: String that represents the phone number
	 * @Throws: None
	 */
	public String getPhone(){
		return phone;
	}

	/* Method that sets the name of who the delivery person is delivering to
	 * @ Parameters: String that represents the name
	 * @ Return: None
	 * @Throws: None
	 */
	public void setName(String name){
		this.name = name;
	}

	/* Method that returns the name of who the delivery person is delivering to
	 * @ Parameters: None
	 * @ Return: String that represents the name of customer
	 * @Throws: None
	 */
	public String getName(){
		return name;
	}

	/* Method that sets the address of who the delivery person is delivering to
	 * @ Parameters: The address
	 * @ Return: None
	 * @Throws: None
	 */
	public void setDeliverTo(String deliverTo){
		this.deliverTo = deliverTo;
	}

	/* Method that returns the address of who the delivery person is delivering to
	 * @ Parameters: None
	 * @ Return: String that represents address of customer
	 * @Throws: None
	 */
	public String getDeliverTo(){
		return deliverTo;
	}

	/* Method that allows a DeliveryDetails item to be printed as a string.
	* @ Parameters: None
	* @ Return: String that represents DeliveryDetails object
	* @Throws: None
	 */
	@Override
 	public String toString(){
		return 
			"pojos.DeliveryDetails{" +
			"phone = '" + phone + '\'' + 
			",name = '" + name + '\'' + 
			",deliverTo = '" + deliverTo + '\'' + 
			"}";
		}
}