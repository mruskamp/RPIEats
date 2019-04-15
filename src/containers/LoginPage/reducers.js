import { combineReducers } from 'redux';

import INITIAL_STATE from '../../InitialState';

import { LOGIN_SUCCESS, LOGIN_FAILED } from './actions';

function username(state=INITIAL_STATE.session.username, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return action.payload.username;
		case LOGIN_FAILED:
			return "";
		default:
			return state;
	}
}

function userType(state=INITIAL_STATE.session.userType, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return action.payload.userType;
		case LOGIN_FAILED:
			return "";
		default:
			return state;
	}
}

function loginFailed(state=INITIAL_STATE.session.loginFailed, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return false;
		case LOGIN_FAILED:
			return true;
		default:
			return state;
	}
}

export default combineReducers({
	username,
	userType,
	loginFailed,
})
