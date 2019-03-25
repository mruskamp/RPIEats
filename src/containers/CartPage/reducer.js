import { combineReducers } from 'redux';

import {
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_CART,
} from './actions';


function restaurantId(state='', action) {
	switch(action.type) {
		case ADD_ITEM:
			if (state === '')	return action.payload.restaurant;
			return state;
		default:
			return state;
	}
}

function addItem(cart, { item, restaurantId }) {
	// ensures the item is in the restaurant your order is at
	if (!cart.restaurantId)
		cart.restaurantId = restaurantId
	if (cart.length > 0 && cart.restaurantId !== restaurantId && restaurantId !== 'same')
		return cart;
	let newCart = [];
	let dup = false;
	newCart = cart.map((cartItem) => {
		if (cartItem.id === item.id) {
			dup = true;
			return Object.assign({}, cartItem, { count: cartItem.count + 1 });
		} else	return cartItem;
	});
	if (!dup)	newCart.push(Object.assign({}, item, { count: 1 }));
	if (!newCart.restaurantId)
		newCart.restaurantId = restaurantId;
	return newCart;
}

function removeItem(cart, { item }) {
	let newCart = [];
	for (let i=0; i<cart.length; i++) {
		let cartItem = cart[i];
		if (cartItem.id === item.id) {
			if (cartItem.count !== 1) {
				newCart.push(Object.assign({}, cartItem, { count: cartItem.count - 1 }));
			}
		} else	newCart.push(cartItem);
	}
	return newCart;
}

function items(state=[], action) {
	switch(action.type) {
		case ADD_ITEM:
			return addItem(state, action.payload);
		case REMOVE_ITEM:
			return removeItem(state, action.payload);
		case CLEAR_CART:
			return [];
		default:
			return state;
	}
}

export default combineReducers({
	items,
	restaurantId,
});