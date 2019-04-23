import ENDPOINT from '../endpoint';

export const IS_FETCHING_ORDERS = "IS_FETCHING_ORDERS";
export const SUCCESS_FETCHING_ORDERS = "SUCCESS_FETCHING_ORDERS";
export const ERROR_FETCHING_ORDERS = "ERROR_FETCHING_ORDERS";

export const IS_FETCHING_ACTIVE_ORDERS = "IS_FETCHING_ACTIVE_ORDERS";
export const SUCCESS_FETCHING_ACTIVE_ORDERS = "SUCCESS_FETCHING_ACTIVE_ORDERS";
export const ERROR_FETCHING_ACTIVE_ORDERS = "ERROR_FETCHING_ACTIVE_ORDERS";

export function isFetchingOrders() {
	return { type: IS_FETCHING_ORDERS };
}

export function successFetchingOrders(orders) {
	return { type: SUCCESS_FETCHING_ORDERS, payload: orders };
}

export function errorFetchingOrders() {
	return { type: ERROR_FETCHING_ORDERS };
}

export function isFetchingActiveOrders() {
	return { type: IS_FETCHING_ACTIVE_ORDERS };
}

export function successFetchingActiveOrders(activeOrders) {
	return { type: SUCCESS_FETCHING_ACTIVE_ORDERS, payload: activeOrders };
}

export function errorFetchingActiveOrders() {
	return { type: ERROR_FETCHING_ACTIVE_ORDERS };
}

export function fetchOrders(customerId, customer) {
	return (dispatch) => {
		// let redux know we're starting to fetch the orders
		dispatch(isFetchingOrders());
		let url = customer ? `${ENDPOINT}/orders/customer/C/${customerId}`
			: `${ENDPOINT}/orders/customer/D/${customerId}`

		fetch(url).then((response) => {	// actually fetching the order data from the api
			return response.json();
		}).then((response) => {			// if the api call is a success
			dispatch(successFetchingOrders(response));
		}).catch((e) => {				// catches if the api call errors
			dispatch(errorFetchingOrders())
		});
	}
}

export function fetchActiveOrders() {
	return (dispatch) => {
		// let redux know we're starting to fetch the orders
		dispatch(isFetchingActiveOrders())

		let url = `${ENDPOINT}/orders/active`
		
		fetch(url).then((response) => {	// actually fetching the order data from the api
			return response.json();
		}).then((response) => {			// if the api call is a success
			dispatch(successFetchingActiveOrders(response));
		}).catch((error) => {				// catches if the api call errors
			dispatch(errorFetchingActiveOrders())
		});
	}
}

export function updateOrderStatus(orderId, status, username) {
	return (dispatch) => {
		// dispatch this so the redux store updates with the new status

		fetch(`${ENDPOINT}/order/edit/${orderId}/${status}/${username}`, {	// let the api know we're changing the status
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {		// if the call is a success
			return response.json();
		}).then((response) => {
			// on successfully changing the status we reload the orders
			dispatch(fetchOrders());
			dispatch(fetchActiveOrders());
		}).catch((e) => {			// if the call errored
			// alert("ERROR UPDATING ORDER");
		})
	}
}