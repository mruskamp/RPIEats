import { combineReducers } from 'redux';

import INITIAL_STATE from '../../InitialState';

import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILED } from './actions';

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

function loggingIn(state=INITIAL_STATE.session.loggingIn, action) {
	switch(action.type) {
		case LOGGING_IN:
			return true;
		case LOGIN_SUCCESS:
		case LOGIN_FAILED:
			return false;
		default:
			return state;
	}
}

function loginFailed(state=INITIAL_STATE.session.loginFailed, action) {
	switch (action.type) {
		case LOGIN_FAILED:
			return true;
		case LOGIN_SUCCESS:
		case LOGGING_IN:
			return false;
		default:
			return state;
	}
}

export default combineReducers({
	username,
	userType,
	loggingIn,
	loginFailed,
})
