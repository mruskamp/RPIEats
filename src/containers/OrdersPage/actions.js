export const IS_FETCHING_ORDERS = "IS_FETCHING_ORDERS";
export const SUCCESS_FETCHING_ORDERS = "SUCCESS_FETCHING_ORDERS";
export const ERROR_FETCHING_ORDERS = "ERROR_FETCHING_ORDERS";



export function successFetchingOrders(orders) {
	return { type: SUCCESS_FETCHING_ORDERS, payload: orders };
}

export function errorFetchingOrders() {
	return { type: ERROR_FETCHING_ORDERS };
}

export function isFetchingOrders(fetching) {
	return { type: IS_FETCHING_ORDERS, payload: fetching };
}

export function fetchOrders(customerId=null) {
	return (dispatch) => {
		// let redux know we're starting to fetch the orders
		let fetchingOrders = isFetchingOrders("customer", "jvparin", true);
		dispatch(fetchingOrders);

		let url = customerId === null ? "http://129.161.86.103:8080/orders/active" : `http://129.161.86.103:8080/orders/${customerId}`

		// fetch("http://129.161.137.71:8080/orders/" + fetchingOrders.payload.userType + "/" + fetchingOrders.payload.userId).then((response) => {	// actually fetching the order data from the api
		fetch(url).then((response) => {	// actually fetching the order data from the api
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