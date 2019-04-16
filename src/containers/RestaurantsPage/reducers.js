import { combineReducers } from 'redux';

import {
	IS_FETCHING_RESTAURANTS,
	SUCCESS_FETCHING_RESTAURANTS,
	ERROR_FETCHING_RESTAURANTS
} from './actions';

// Functions that keep the state of the Restaurants Page up to date and organized accordingly

function isFetchingRestaurants(state=false, action) {
	switch(action.type) {
		case IS_FETCHING_RESTAURANTS:
			return action.payload;
		default:
			return state; 
	}
}

function errorFetchingRestaurants(state=false, action) {
	switch(action.type) {
		case ERROR_FETCHING_RESTAURANTS:
			return true;
		default:
			return false;
	}
}

function restaurants(state=[], action) {
	switch(action.type) {
		case SUCCESS_FETCHING_RESTAURANTS:
			return action.payload;
		default:
			return state;
	}
}

export default combineReducers({
	restaurants,
	errorFetchingRestaurants,
	isFetchingRestaurants
});