
export const CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS";

// Calls made to the backend to change and update the status of an order in the Status Page

export function changeOrderStatus(orderId, status) {
	return { type: CHANGE_ORDER_STATUS, payload: { orderId, status } };
}

export function updateOrderStatus(orderId, status, username) {
	return (dispatch) => {
		// dispatch this so the redux store updates with the new status
		let orderStatus = changeOrderStatus(orderId, status) 
		dispatch(orderStatus);

		fetch(`http://129.161.76.94:8080/order/edit/${orderId}/${status}/${username}`, {	// let the api know we're changing the status
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {		// if the call is a success
			console.log(response);
			return response.json();
		}).then((response) => {
			console.log(response)
			dispatch(changeOrderStatus(orderId, status));
		}).catch((e) => {			// if the call errored
			console.log(e.response)
		})
	}
}