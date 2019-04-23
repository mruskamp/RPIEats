import ENDPOINT from '../endpoint';

export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";

export function loggingIn() {
	return { type: LOGGING_IN };
}

export function loginSuccess(username, userType) {
	return { type: LOGIN_SUCCESS, payload: { username, userType } };
}

export function loginFailed() {
	return { type: LOGIN_FAILED };
}

export function logout() {
	return { type: LOGOUT };
}

export function login(username, password, userType) {
	return (dispatch) => {
		dispatch(loggingIn());

		let url = `${ENDPOINT}/login`;
		let data = { username, password, userType };

		fetch(url, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((response) => {		// if the call is a success
			if (response.status === 401)
				dispatch(loginFailed())
			else
				dispatch(loginSuccess(username, userType));
		}).catch((e) => {			// if the call errored
			dispatch(loginFailed())
		})
	}	
}