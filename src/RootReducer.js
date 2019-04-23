import { combineReducers } from 'redux'

import INITIAL_STATE from './InitialState';

import restaurantsReducer from './data/restaurants/reducers';
import ordersReducer from './data/orders/reducers';
import cartReducer from './containers/CartPage/reducer';
import sessionReducer from './containers/LoginPage/reducers';

function cart(state=INITIAL_STATE.cart, action) {
	return cartReducer(state, action);
}

export default combineReducers({
	restaurantData: restaurantsReducer,
	cart,
	orderData: ordersReducer,
	session: sessionReducer,
})