
export const CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS";

export function changeOrderStatus(orderId, status) {
	return { type: CHANGE_ORDER_STATUS, payload: { orderId, status } };
}

export function updateOrderStatus(orderId, status) {
	return (dispatch) => {
		// dispatch this so the redux store updates with the new status
		dispatch(changeOrderStatus(orderId, status));

		fetch("http://129.161.142.118:8080/CreateOrder", {	// let the api know we're changing the status
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: { orderId, status },
		}).then((response) => {		// if the call is a success
			console.log(response)
			return response.json();
		}).then((response) => {
			return
		}).catch((e) => {			// if the call errored
			console.log(e)
			alert("ERROR UPDATING ORDER");
		})
	}
}