import { combineReducers } from 'redux'

import INITIAL_STATE from './InitialState';

import restaurantsReducer from './containers/RestaurantsPage/reducers';
import cartReducer from './containers/CartPage/reducers';
import ordersReducer from './containers/OrdersPage/reducers';
import sessionReducer from './containers/LoginPage/reducers';

// Binds all the reducers together in order to work synchronously

function restaurantData(state=INITIAL_STATE.restaurantData, action) {
	return restaurantsReducer(state, action);
}

function cart(state=INITIAL_STATE.cart, action) {
	return cartReducer(state, action);
}

function orderData(state=INITIAL_STATE.orderData, action) {
	return ordersReducer(state, action);
}

export default combineReducers({
	restaurantData,
	cart,
	orderData,
	session: sessionReducer,
})