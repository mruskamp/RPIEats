import { getRestaurants } from '../RestaurantsPage/selectors';

export const getRestaurant = (state, restaurantName) => getRestaurants(state).find((restaurant) => restaurantName === restaurant.name);

// export const getMenu = (state, restaurantName) => getRestaurant(state, restaurantName).menu;
export function getMenu(state, restaurantName) {
	let restaurant = getRestaurant(state, restaurantName);
	if (restaurant) {
		return restaurant.menu;
	} else	return []
}

// export const getImage = (state, restaurantName) => getRestaurant(state, restaurantName).imgURL;
export function getImage(state, restaurantName) {
	let restaurant = getRestaurant(state, restaurantName);
	if (restaurant) {
		return restaurant.imgURL;
	} else	return null
}

export function getRestaurantId(state, restaurantName) {
	return getRestaurant(state, restaurantName).restaurantId;
}