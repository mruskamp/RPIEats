// selectors for parsing store data suitable for the components

export const isFetchingRestaurants = (state) => state.restaurantData.isFetchingRestaurants;

export const getRestaurants = (state) => {
	return state.restaurantData.restaurants;
}