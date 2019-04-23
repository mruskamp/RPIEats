import { combineReducers } from 'redux'

import restaurantsReducer from './data/restaurants/reducers';
import ordersReducer from './data/orders/reducers';
import cartReducer from './data/cart/reducers';
import sessionReducer from './data/session/reducers';

export default combineReducers({
	restaurantData: restaurantsReducer,
	cart: cartReducer,
	orderData: ordersReducer,
	session: sessionReducer,
})