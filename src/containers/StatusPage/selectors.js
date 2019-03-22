import { getOrders } from '../OrdersPage/selectors';

export const getOrder = (state, orderId) => getOrders(state).find((order) => orderId === order.orderId);
// export const getOrderImage = (state, orderId) => get
export function getItems(state, orderId) {
	let order = getOrder(state, orderId);
	if (order) {
		return order.orderSummary;
	} else	return []
}

// export function getImage(state, restaurantName) {
// 	let order = getOrder(state, restaurantName);
// 	if (order) {
// 		return order.imgUrl;
// 	} else	return null
// }

export function getRestaurantId(state, orderId) {
	return getOrder(state, orderId).orderId;
}