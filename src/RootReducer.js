import { combineReducers } from 'redux'

import INITIAL_STATE from './InitialState';

import restaurantsReducer from './containers/RestaurantsPage/reducer';
import cartReducer from './containers/CartPage/reducer';

function restaurantData(state=INITIAL_STATE.restaurantData, action) {
	return restaurantsReducer(state, action);
}

function cart(state=INITIAL_STATE.cart, action) {
	return cartReducer(state, action);
}

export default combineReducers({
	restaurantData,
	cart,
})