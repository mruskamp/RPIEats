
export const isPlacingOrder = (state) => state.cart.placingOrder;

export const placeOrderSuccess = (state) => state.cart.placeOrderSuccess;

export const placeOrderError = (state) => state.cart.placeOrderError;

export const getCartItems = (state) => state.cart.items;

export const getCartRestaurantId = (state) => state.cart.restaurantId;

export function getCartCost(state) {
	let sum = 0;
	state.cart.items.forEach((item) => sum += parseFloat(item.count) * parseFloat(item.price));
	return sum;
}