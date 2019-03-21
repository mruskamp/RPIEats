const tempRestaurants = [
	{
		"name":"Thunder Mountain Curry",
		"location":"Rensselaer Union",
		"status" : "Open",
		"restaurantId":32132,
		"imgUrl":"http://alloveralbany.com/images/thunder_mountain_curry_logo.png",
		"menu":[{"name":"Chicken Pad Thai","price":"8.50"},{"name":"Mango Lassi","price":"3.50"}],
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


const tempRestaurantData = {
	restaurants: tempRestaurants,
	isFetchingRestaurants: false,
	errorFetchingRestaurants: false,
}

export default {
	restaurantData: tempRestaurantData,
	cart: {
		items: [
			{name: "Chicken Pad Thai", id: "cpt", price:"8.50", count: 2},
			{name: "Mango Lassi", id: "ml", price:"3.50", count: 1},
		],
		restaurantId: 'Thunder Mountain Curry',
	}
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