import { combineReducers } from 'redux';

import {
	ADD_ITEM,
} from './actions';


function restaurantId(state='', action) {
	switch(action.type) {
		case ADD_ITEM:
			if (state = '')	return action.payload.restaurant;
			return state;
		default:
			return state;
	}
}

function addItem(cart, { item, restaurantId }) {
	if (cart.length > 0 && cart[0].restaurantId !== restaurantId)	// ensures the item is in the restaurant your order is at
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
	return newCart;
}

function items(state=[], action) {
	switch(action.type) {
		case ADD_ITEM:
			return addItem(state, action.payload);
		default:
			return state;
	}
}

export default combineReducers({
	items,
	restaurantId,
});