import ENDPOINT from '../endpoint';

export const IS_FETCHING_RESTAURANTS = "IS_FETCHING_RESTAURANTS";
export const SUCCESS_FETCHING_RESTAURANTS = "SUCCESS_FETCHING_RESTAURANTS";
export const ERROR_FETCHING_RESTAURANTS = "ERROR_FETCHING_RESTAURANTS";

export function successFetchingRestaurants(restaurants) {
	return { type: SUCCESS_FETCHING_RESTAURANTS, payload: restaurants };
}

export function errorFetchingRestaurants() {
	return { type: ERROR_FETCHING_RESTAURANTS };
}

export function isFetchingRestaruants() {
	return { type: IS_FETCHING_RESTAURANTS };
}

export function fetchRestaurants() {
	return (dispatch) => {
		// let redux know we're starting to fetch the restaurants
		dispatch(isFetchingRestaruants());

		fetch(`${ENDPOINT}/restaurants`).then((response) => {	// actually fetching the restaurant data from the api
			return response.json();
		}).then((response) => {			// if the api call is a success
			dispatch(successFetchingRestaurants(response));
		}).catch(() => {				// catches if the api call errors
			dispatch(errorFetchingRestaurants());
		});
	}
}