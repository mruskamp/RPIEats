import { combineReducers } from 'redux'

import INITIAL_STATE from './InitialState';

import restaurantsReducer from './containers/RestaurantsPage/reducer';

function restaurantData(state=INITIAL_STATE.restaurantData, action) {
	return restaurantsReducer(state, action);
}

export default combineReducers({
	restaurantData,
})