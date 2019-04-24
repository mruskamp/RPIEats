import ENDPOINT from '../endpoint';

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const PLACING_ORDER = "PLACING_ORDER";
export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_ERROR = "PLACE_ORDER_ERROR";

// Calls made to the backend when adding an item, deleting an item, and placing an order in the Cart Page

export function addItem(item, restaurantId) {
	return { type: ADD_ITEM, payload: { item, restaurantId } };
}

export function removeItem(item, restaurantId) {
	return { type: REMOVE_ITEM, payload: { item, restaurantId } };
}

export function clearCart() {
	return { type: CLEAR_CART };
}

export function placingOrder() {
	return { type: PLACING_ORDER };
}

export function placeOrderError() {
	return { type: PLACE_ORDER_ERROR };
}

export function placeOrderSuccess() {
	return { type: PLACE_ORDER_SUCCESS };
}

export function placeOrder(order) {
	return (dispatch) => {
		dispatch(placingOrder());
		
		fetch(`${ENDPOINT}/order/create`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		}).then((response) => {
			dispatch(placeOrderSuccess())
		}).catch((e) => {
			dispatch(placeOrderError());
		})

	}
}