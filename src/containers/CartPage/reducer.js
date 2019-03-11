import { combineReducers } from 'redux';

import {
	ADD_ITEM,
} from './actions';


function restaurant(state='', action) {
	return state;
}

function items(state=[], action) {
	switch(action.type) {
		case ADD_ITEM:
			return state.concat([action.payload]);
		default:
			return state;
	}
}

export default combineReducers({
	items,
	restaurant,
});