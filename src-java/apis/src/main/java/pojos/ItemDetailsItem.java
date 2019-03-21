package pojos;

import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;

@Generated("com.robohorse.robopojogenerator")
public class ItemDetailsItem{

	@SerializedName("unitPrice")
	private int unitPrice;

	@SerializedName("totalPrice")
	private int totalPrice;

	@SerializedName("qty")
	private int qty;

	@SerializedName("name")
	private String name;

	@SerializedName("id")
	private int id;

	public void setUnitPrice(int unitPrice){
		this.unitPrice = unitPrice;
	}

	public int getUnitPrice(){
		return unitPrice;
	}

	public void setTotalPrice(int totalPrice){
		this.totalPrice = totalPrice;
	}

	public int getTotalPrice(){
		return totalPrice;
	}

	public void setQty(int qty){
		this.qty = qty;
	}

	public int getQty(){
		return qty;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return name;
	}

	public void setId(int id){
		this.id = id;
	}

	public int getId(){
		return id;
	}


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