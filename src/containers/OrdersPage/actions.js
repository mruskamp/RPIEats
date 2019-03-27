export const IS_FETCHING_ORDERS = "IS_FETCHING_ORDERS";
export const SUCCESS_FETCHING_ORDERS = "SUCCESS_FETCHING_ORDERS";
export const ERROR_FETCHING_ORDERS = "ERROR_FETCHING_ORDERS";



export function successFetchingOrders(orders) {
	return { type: SUCCESS_FETCHING_ORDERS, payload: orders };
}

export function errorFetchingOrders() {
	return { type: ERROR_FETCHING_ORDERS };
}

export function isFetchingOrders(userType, userId, fetching) {
	return { type: IS_FETCHING_ORDERS, payload: { userType, userId, fetching } };
}

export function fetchOrders() {
	return (dispatch) => {
		// let redux know we're starting to fetch the orders
		let fetchingOrders = isFetchingOrders("customer", "jvparin", true);
		dispatch(fetchingOrders);

		fetch("http://129.161.137.71:8080/orders/" + fetchingOrders.payload.userType + "/" + fetchingOrders.payload.userId).then((response) => {	// actually fetching the order data from the api
			return response.json();
		}).then((response) => {			// if the api call is a success
			dispatch(successFetchingOrders(response));
			dispatch(isFetchingOrders(false));
		}).catch(() => {				// catches if the api call errors
			dispatch(isFetchingOrders(false));
			dispatch(errorFetchingOrders());
		});
	}
}