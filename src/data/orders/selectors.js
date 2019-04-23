export const isFetchingOrders = (state) => state.orderData.isFetchingOrders;

export const getOrders = (state) => {
	return state.orderData.orders;
}

export const getActiveOrders = (state) => {
	return state.orderData.activeOrders;
}

export const getOrderIds = (state) => {
	return [state.orderData.orders.map((order) => order.orderId)];
}

export const getOrder = (state, orderId) => {
	let possibleOrder = getOrders(state).find((order) => orderId === order.orderId);
	if (possibleOrder !== undefined)
		return possibleOrder;
	return getActiveOrders(state).find((order) => orderId === order.orderId)
}

export function getItems(state, orderId) {
	let order = getOrder(state, orderId);
	if (order) {
		return order.orderSummary.itemDetails;
	} else	return []
}

export function getOrderSummary(state, orderId) {
	return getOrder(state,orderId).orderSummary;
}

export function getImage(state, restaurantName) {
	let order = getOrder(state, restaurantName);
	if (order) {
		return order.imgURL;
	} else	return null
}