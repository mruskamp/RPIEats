import { combineReducers } from 'redux';

import INITIAL_STATE from '../../InitialState';

import {
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_CART,
	PLACING_ORDER,
	PLACE_ORDER_SUCCESS,
	PLACE_ORDER_ERROR,
} from './actions';


function restaurantId(state=INITIAL_STATE.cart.restaurantId, action) {
	switch (action.type) {
		case ADD_ITEM:
			if (state === '')	return action.payload.restaurant;
			return state;
		case PLACE_ORDER_SUCCESS:
		case CLEAR_CART:
			return '';
		default:
			return state;
	}
}

function addItem(items, { item, restaurantId }) {
	let newCart = [];
	let dup = false;
	newCart = items.map((cartItem) => {
		if (cartItem.id === item.id) {
			dup = true;
			return Object.assign({}, cartItem, { count: cartItem.count + 1 });
		} else	return cartItem;
	});
	if (!dup)	newCart.push(Object.assign({}, item, { count: 1 }));
	return newCart;
}

function removeItem(items, { item, restaurantId }) {
	let newCart = [];
	for (let i=0; i<items.length; i++) {
		let cartItem = items[i];
		if (cartItem.id === item.id) {
			if (cartItem.count !== 1) {
				newCart.push(Object.assign({}, cartItem, { count: cartItem.count - 1 }));
			}
		} else	newCart.push(cartItem);
	}
	return newCart;
}

function items(state=INITIAL_STATE.cart.items, action) {
	switch (action.type) {
		case ADD_ITEM:
			return addItem(state, action.payload);
		case REMOVE_ITEM:
			return removeItem(state, action.payload);
		case PLACE_ORDER_SUCCESS:
		case CLEAR_CART:
			return [];
		default:
			return state;
	}
}

function placingOrder(state=INITIAL_STATE.cart.placingOrder, action) {
	switch (action.type) {
		case PLACING_ORDER:
			return true;
		case PLACE_ORDER_SUCCESS:
		case PLACE_ORDER_ERROR:
			return false;
		default:
			return state;
	}
}

function placeOrderSuccess(state=INITIAL_STATE.cart.placeOrderSuccess, action) {
	switch (action.type) {
		case PLACE_ORDER_SUCCESS:
			return true;
		case PLACING_ORDER:
		case PLACE_ORDER_ERROR:
			return false;
		default:
			return state;
	}
}

function placeOrderError(state=INITIAL_STATE.cart.placeOrderError, action) {
	switch (action.type) {
		case PLACE_ORDER_ERROR:
			return true;
		case PLACING_ORDER:
		case PLACE_ORDER_SUCCESS:
			return false;
		default:
			return state;
	}
}

export default combineReducers({
	items,
	restaurantId,
	placingOrder,
	placeOrderSuccess,
	placeOrderError
});