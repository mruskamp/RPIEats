export const IS_FETCHING_ORDERS = "IS_FETCHING_ORDERS";
export const SUCCESS_FETCHING_ORDERS = "SUCCESS_FETCHING_ORDERS";
export const ERROR_FETCHING_ORDERS = "ERROR_FETCHING_ORDERS";
export const SUCCESS_FETCHING_ACTIVE_ORDERS = "SUCCESS_FETCHING_ACTIVE_ORDERS";

// Calls made to the backend when getting past and active orders in the Orders Page

export function successFetchingOrders(orders) {
	return { type: SUCCESS_FETCHING_ORDERS, payload: orders };
}

export function errorFetchingOrders() {
	return { type: ERROR_FETCHING_ORDERS };
}

export function isFetchingOrders(fetching) {
	return { type: IS_FETCHING_ORDERS, payload: fetching };
}

export function successFetchingActiveOrders(orders) {
	return { type: SUCCESS_FETCHING_ACTIVE_ORDERS, payload: orders };
}

export function fetchOrders(customerId, customer) {
	return (dispatch) => {
		// let redux know we're starting to fetch the orders
		let fetchingOrders = isFetchingOrders("customer", "jvparin", true);
		dispatch(fetchingOrders);
		let url = customer ? `http://129.161.76.94:8080/orders/customer/C/${customerId}`
			: `http://129.161.76.94:8080/orders/customer/D/${customerId}`

		console.log("FETCHING ORDERS");
		fetch(url).then((response) => {	// actually fetching the order data from the api
			// console.log(response);
			return response.json();
		}).then((response) => {			// if the api call is a success
			dispatch(successFetchingOrders(response));
			dispatch(isFetchingOrders(false));
		}).catch((e) => {				// catches if the api call errors
			console.log(e);
		});
	}
}

export function fetchActiveOrders() {
	return (dispatch) => {
		// let redux know we're starting to fetch the orders
		let url = `http://129.161.76.94:8080/orders/active`
		
		console.log("FETCHING ACTIVE ORDERS");
		fetch(url).then((response) => {	// actually fetching the order data from the api
			return response.json();
		}).then((response) => {			// if the api call is a success
			dispatch(successFetchingActiveOrders(response));
		}).catch((error) => {				// catches if the api call errors
			console.log(error);
		});
	}
}