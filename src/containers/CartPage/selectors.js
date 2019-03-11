
export const getItems = (state) => state.cart.items;

export const getRestaurant = (state) => state.cart.restaaurant;

export function getCartCost(state) {
	let sum = 0;
	state.cart.items.forEach((item) => sum += parseFloat(item.count) * parseFloat(item.price));
	return sum;
}

