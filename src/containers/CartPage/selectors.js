
export const getItems = (state) => state.cart.items;

export const getRestaurant = (state) => {
	let id = state.cart.restaurantId;
	for (let i=0; i<state.restaurantData.restaurants.length; i++)
		if (id == state.restaurantData.restaurants[i].restaurantId)	return state.restaurantData.restaurants[i]
}

export function getCartCost(state) {
	let sum = 0;
	state.cart.items.forEach((item) => sum += parseFloat(item.count) * parseFloat(item.price));
	return sum;
}

export function getOrder(state) {
	return state.cart;
}
