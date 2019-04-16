// Functions that help store data for the minimal possible state of the Restaurants Page

export const isFetchingRestaurants = (state) => state.restaurantData.isFetchingRestaurants;

export const getRestaurants = (state) => {
	return state.restaurantData.restaurants;
}

export const getRestaurantNames = (state) => {
	return [state.restaurantData.restaurants.map((restaurant) => restaurant.name)];
}