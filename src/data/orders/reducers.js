import { combineReducers } from 'redux';

import INITIAL_STATE from '../../InitialState';

import {
	IS_FETCHING_ORDERS,
	SUCCESS_FETCHING_ORDERS,
	ERROR_FETCHING_ORDERS,
	IS_FETCHING_ACTIVE_ORDERS,
	ERROR_FETCHING_ACTIVE_ORDERS,
	SUCCESS_FETCHING_ACTIVE_ORDERS,
} from './actions';

function isFetchingOrders(state=INITIAL_STATE.orderData.isFetchingOrders, action) {
	switch(action.type) {
		case IS_FETCHING_ORDERS:
			return true;
		case SUCCESS_FETCHING_ORDERS:
		case ERROR_FETCHING_ORDERS:
			return false;
		default:
			return state; 
	}
}

function successFetchingOrders(state=INITIAL_STATE.orderData.successFetchingOrders, action) {
	switch(action.type) {
		case SUCCESS_FETCHING_ORDERS:
			return true;
		case IS_FETCHING_ORDERS:
		case ERROR_FETCHING_ORDERS:
			return false;
		default:
			return state;
	}
}

function errorFetchingOrders(state=INITIAL_STATE.orderData.errorFetchingOrders, action) {
	switch(action.type) {
		case ERROR_FETCHING_ORDERS:
			return true;
		case IS_FETCHING_ORDERS:
		case SUCCESS_FETCHING_ORDERS:
			return false
		default:
			return false;
	}
}

function orders(state=INITIAL_STATE.orderData.orders, action) {
	switch(action.type) {
		case SUCCESS_FETCHING_ORDERS:
			return action.payload;
		default:
			return state;
	}
}

function isFetchingActiveOrders(state=INITIAL_STATE.orderData.isFetchingActiveOrders, action) {
	switch(action.type) {
		case IS_FETCHING_ACTIVE_ORDERS:
			return true;
		case SUCCESS_FETCHING_ACTIVE_ORDERS:
		case ERROR_FETCHING_ACTIVE_ORDERS:
			return false;
		default:
			return state; 
	}
}

function successFetchingActiveOrders(state=INITIAL_STATE.orderData.successFetchingActiveOrders, action) {
	switch(action.type) {
		case SUCCESS_FETCHING_ACTIVE_ORDERS:
			return true;
		case IS_FETCHING_ACTIVE_ORDERS:
		case ERROR_FETCHING_ACTIVE_ORDERS:
			return false;
		default:
			return state;
	}
}

function errorFetchingActiveOrders(state=INITIAL_STATE.orderData.errorFetchingActiveOrders, action) {
	switch(action.type) {
		case ERROR_FETCHING_ACTIVE_ORDERS:
			return true;
		case IS_FETCHING_ACTIVE_ORDERS:
		case SUCCESS_FETCHING_ACTIVE_ORDERS:
			return false
		default:
			return false;
	}
}

function activeOrders(state=INITIAL_STATE.orderData.activeOrders, action) {
	if (action.type === SUCCESS_FETCHING_ACTIVE_ORDERS)
		return action.payload;
	return state;
}

export default combineReducers({
	isFetchingOrders,
	successFetchingOrders,
	errorFetchingOrders,
	orders,
	isFetchingActiveOrders,
	successFetchingActiveOrders,
	errorFetchingActiveOrders,
	activeOrders,
});