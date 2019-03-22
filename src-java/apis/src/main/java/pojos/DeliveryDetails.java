package pojos;

import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;

@Generated("com.robohorse.robopojogenerator")
public class DeliveryDetails{

	@SerializedName("phone")
	private String phone;

	@SerializedName("name")
	private String name;

	@SerializedName("deliverTo")
	private String deliverTo;

	public void setPhone(String phone){
		this.phone = phone;
	}

	public String getPhone(){
		return phone;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return name;
	}

	public void setDeliverTo(String deliverTo){
		this.deliverTo = deliverTo;
	}

	public String getDeliverTo(){
		return deliverTo;
	}

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