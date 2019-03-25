import { getRestaurants } from '../RestaurantsPage/selectors';

export const getRestaurant = (state, restaurantName) => getRestaurants(state).find((restaurant) => restaurantName === restaurant.name);

export function getMenu(state, restaurantName) {
	let restaurant = getRestaurant(state, restaurantName);
	if (restaurant) {
		return restaurant.menu;
	} else	return []
}

export function getImage(state, restaurantName) {
	let restaurant = getRestaurant(state, restaurantName);
	if (restaurant) {
		return restaurant.imgURL;
	} else	return null
}

export function getRestaurantId(state, restaurantName) {
	return getRestaurant(state, restaurantName).restaurantId;
}