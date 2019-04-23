// selectors for parsing store data suitable for the components

export const isFetchingRestaurants = (state) => state.restaurantData.isFetchingRestaurants;
export const errorFetchingRestaurants = (state) => state.restaurantData.errorFetchingRestaurants;
export const successFetchingRestaurants = (state) => state.restaurantData.successFetchingRestaurants;

export const getRestaurants = (state) => {
	return state.restaurantData.restaurants;
}

export const getRestaurantNames = (state) => {
	return [state.restaurantData.restaurants.map((restaurant) => restaurant.name)];
}

// assumes there is a restaurant by that id
export function getRestaurantById(state, restaurantId) {
	let restaurants = getRestaurants(state);
	for (let i=0; i<restaurants.length; i++) {
		if (restaurants[i].restaurantId === restaurantId)
			return restaurants[i];
	}
}

// assumes there is a restaurant by that name
export function getRestaurantByName(state, name) {
	let restaurants = getRestaurants(state);
	for (let i=0; i<restaurants.length; i++) {
		if (restaurants[i].name === name)
			return restaurants[i];
	}
}