import { combineReducers } from 'redux';

import {
	IS_FETCHING_RESTAURANTS,
	SUCCESS_FETCHING_RESTAURANTS,
	ERROR_FETCHING_RESTAURANTS
} from './actions';

import INITIAL_STATE from '../../InitialState';

function isFetchingRestaurants(state=INITIAL_STATE.restaurantData.isFetchingRestaurants, action) {
	switch(action.type) {
		case IS_FETCHING_RESTAURANTS:
			return true;
		case ERROR_FETCHING_RESTAURANTS:
		case SUCCESS_FETCHING_RESTAURANTS:
			return false;
		default:
			return state; 
	}
}

function errorFetchingRestaurants(state=INITIAL_STATE.restaurantData.errorFetchingRestaurants, action) {
	switch(action.type) {
		case ERROR_FETCHING_RESTAURANTS:
			return true;
		case IS_FETCHING_RESTAURANTS:
		case SUCCESS_FETCHING_RESTAURANTS:
			return false;
		default:
			return state;
	}
}

function successFetchingRestaurants(state=INITIAL_STATE.restaurantData.successFetchingRestaurants, action) {
	switch(action.type) {
		case SUCCESS_FETCHING_RESTAURANTS:
			return true;
		case IS_FETCHING_RESTAURANTS:
		case ERROR_FETCHING_RESTAURANTS:
			return false;
		default:
			return state;
	}
}

function restaurants(state=INITIAL_STATE.restaurantData.restaurants, action) {
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
	successFetchingRestaurants,
	isFetchingRestaurants
});