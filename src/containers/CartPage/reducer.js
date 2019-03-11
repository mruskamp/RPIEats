import { combineReducers } from 'redux';

import {
	ADD_ITEM,
} from './actions';


function restaurant(state='', action) {
	return state;
}

function addItem(cart, item) {
	let newCart = [];
	let dup = false;
	newCart = cart.map((cartItem) => {
		if (cartItem.id == item.id) {
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
	restaurant,
});