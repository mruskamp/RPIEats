import { combineReducers } from 'redux';

import {
	IS_FETCHING_ORDERS,
	SUCCESS_FETCHING_ORDERS,
	ERROR_FETCHING_ORDERS
} from './actions';

import { CHANGE_ORDER_STATUS } from '../StatusPage/actions';


function isFetchingOrders(state=false, action) {
	switch(action.type) {
		case IS_FETCHING_ORDERS:
			return action.payload;
		default:
			return state; 
	}
}

function errorFetchingOrders(state=false, action) {
	switch(action.type) {
		case ERROR_FETCHING_ORDERS:
			return true;
		default:
			return false;
	}
}

function changeOrderStatus(orders=[], { orderId, status }) {
	return orders.map((order) => {
		if (order.orderId === orderId) {
			return Object.assign({}, order, { status });
		} else {
			return order;
		}
	})
}

function orders(state=[], action) {
	switch(action.type) {
		case SUCCESS_FETCHING_ORDERS:
			return action.payload;
		case CHANGE_ORDER_STATUS:
			return changeOrderStatus(state, action.payload);
		default:
			return state;
	}
}

export default combineReducers({
	orders,
	errorFetchingOrders,
	isFetchingOrders
});