const tempRestaurants = [
	{
		"name":"Thunder Mountain Curry",
		"location":"Rensselaer Union",
		"status" : "Open",
		"restaurantId":32132,
		"imgUrl":"http://alloveralbany.com/images/thunder_mountain_curry_logo.png",
		"menu":[{"name":"Chicken Pad Thai","price":"8.50", "id": "cpt"},{"name":"Mango Lassi","price":"3.50", "id": "ml"}],
	},
	{
		"name":"Cusato's Pizzeria & Deli",
		"location":"Rensselaer Union",
		"status" : "Closing Soon",
		"restaurantId":32132323,
		"imgUrl":"https://9bf6ddc20002c5f1a946-ef07da46c7e506e973e0d9fa57c693df.ssl.cf1.rackcdn.com/636632980697214042+48198.png",
		menu: [],
	},
]

const tempOrders = [
	{
		"_id": "5c9417c4c6c41604e7d9d4e5",
		"orderId": "5c9417c4c6c41604e7d9d4e5",
		"status": "ACTIVE",
		"restaurantId": 3232,
		"user": "jvparin",
		"deliveryDetails": {
			"deliverTo": "Sage Building",
			"name": "John",
			"phone": "518-596-0607"
		},
		"orderSummary": {
			"vendor": "Thunder Mountain Curry",
			"location": "Rensselaer Union",
			"subTotal": 20,
			"tax": 10,
			"deliveryFee": 0,
			"total": 30,
			"itemDetails": [
				{
					"id": 1,
					"name": "Pad Thai",
					"unitPrice": 2,
					"qty": 2,
					"totalPrice": 16
				},
				{
					"id": 2,
					"name": "Mango Lassi",
					"unitPrice": 1,
					"qty": 1,
					"totalPrice": 4
				}
			]
		}
	}
]

const tempRestaurantData = {
	restaurants: tempRestaurants,
	isFetchingRestaurants: false,
	errorFetchingRestaurants: false,
}

const tempOrderData = {
	orders: tempOrders,
	isFetchingOrders: false,
	errorFetchingOrders: false,
}

export default {
	restaurantData: tempRestaurantData,
	cart: {
		items: [
			{name: "Chicken Pad Thai", id: "cpt", price:"8.50", count: 2},
			{name: "Mango Lassi", id: "ml", price:"3.50", count: 1},
		],
		restaurantId: 32132,
	},
	orderData: tempOrderData,
}



/************ This is the actual initial state ***********/
/************ commented out to use temp data instead ************/
/*
export default {
	restaurantData: {
		isFetchingRestaurants: false,
		errorFetchingRestaurants: false,
		restaurants: [],
	},
	cart: {
		items: [],
		restaurant: '',
	},
}
*/