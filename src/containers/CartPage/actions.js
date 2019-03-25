
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const PLACE_ORDER = "PLACE_ORDER";
export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_ERROR = "PLACE_ORDER_ERROR";
export const CLEAR_CART = "CLEAR_CART";

export function addItem(item, restaurantId="same") {
	return { type: ADD_ITEM, payload: { item, restaurantId } };
}

export function removeItem(item) {
	return { type: REMOVE_ITEM, payload: { item } };
}

export function clearCart() {
	return { type: CLEAR_CART, payload: {} }
}

export function placeOrder(order) {
	return (dispatch) => {
		console.log(JSON.stringify(order));
		
		fetch("http://129.161.138.37:8080/order/create", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		}).then((response) => {
			console.log(response)
			return response.json();
		}).then((response) => {
			console.log("Response: ", response);
		}).catch((e) => {
			console.log(e)
			console.log("ERROR PLACING ORDER");
		})

	}
}