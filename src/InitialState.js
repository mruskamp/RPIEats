/* Initial State data for loading the app in the first place */
export default {
	restaurantData: {
		restaurants: [],
		isFetchingRestaurants: false,
		errorFetchingRestaurants: false,
		successFetchingRestaurants: false,
	},
	cart: {
		items: [],
		restaurantId: '',
		placingOrder: false,
		placeOrderSuccess: false,
		placeOrderError: false,
	},
	orderData: {
		orders: [],
		isFetchingOrders: false,
		errorFetchingOrders: false,
		successFetchingOrders: false,
		activeOrders: [],
		isFetchingActiveOrders: false,
		errorFetchingActiveOrders: false,
		successFetchingActiveOrders: false,

	},
	session: {
		username: "",
		userType: "",
		loggingIn: false,
		loginFailed: false,
	}
}