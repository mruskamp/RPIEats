// Functions that help store data for the minimal possible state of the Orders Page

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