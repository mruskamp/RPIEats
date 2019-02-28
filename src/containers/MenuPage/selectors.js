import { getRestaurants } from '../RestaurantsPage/selectors';

export const getRestaurant = (state, restaurantName) => getRestaurants(state).find((restaurant) => restaurantName == restaurant.name);

export const getMenu = (state, restaurantName) => getRestaurant(state, restaurantName).menu;

export const getImage = (state, restaurantName) => getRestaurant(state, restaurantName).imgUrl;

