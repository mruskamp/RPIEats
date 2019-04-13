
import InitialState from '../../InitialState';

import { LOGIN_SUCCESS, LOGIN_FAILED } from './actions';

export default function session(state=InitialState.action, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return Object.assign({},
				state,
				{
					username: action.payload.username,
					userType: action.payload.userType,
					loginFailed: false,
				});
		case LOGIN_FAILED:
			return Object.assign({},
				state,
				{
					loginFailed: true,
				});
		default:
			return state;
	}
}