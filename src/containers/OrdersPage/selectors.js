// selectors for parsing store data suitable for the components

export const isFetchingOrders = (state) => state.orderData.isFetchingOrders;

export const getOrders = (state) => {
	return state.orderData.orders;
}

export const getOrderNames = (state) => {
	return [state.orderData.orders.map((order) => order.name)];
}