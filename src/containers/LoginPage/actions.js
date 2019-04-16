
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// Calls made to the backend when logging in with user credentials in the Login Page

export function loginSuccess(username, userType) {
	return { type: LOGIN_SUCCESS, payload: { username, userType } };
}

export function loginFailed(error) {
	return { type: LOGIN_FAILED, payload: error };
}

export function login(username, password, userType) {
	return (dispatch) => {
		let url = "http://129.161.76.94:8080/login";

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
				dispatch(loginFailed(response))
			else
				dispatch(loginSuccess(username, userType));
		}).catch((e) => {			// if the call errored
			console.log(e)
			dispatch(loginFailed(e))
		})
	}	
}