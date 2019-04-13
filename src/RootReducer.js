import { combineReducers } from 'redux'

import INITIAL_STATE from './InitialState';

import restaurantsReducer from './containers/RestaurantsPage/reducer';
import cartReducer from './containers/CartPage/reducer';
import ordersReducer from './containers/OrdersPage/reducer';
import sessionReducer from './containers/LoginPage/reducers';

function restaurantData(state=INITIAL_STATE.restaurantData, action) {
	return restaurantsReducer(state, action);
}

function cart(state=INITIAL_STATE.cart, action) {
	return cartReducer(state, action);
}

function orderData(state=INITIAL_STATE.orderData, action) {
	return ordersReducer(state, action);
}

function session(state=INITIAL_STATE.session, action) {
	return sessionReducer(state, action);
}

export default combineReducers({
	restaurantData,
	cart,
	orderData,
	session,
})