const tempRestaurants = [
	{
		"name":"Thunder Mountain Curry",
		"location":"Rensselaer Union",
		"status" : "Open",
		"restaurantId":32132,
		"imgUrl":"http://blahblah",
		"menu":[{"name":"Chicken Pad Thai","price":"8.50"},{"name":"Mango Lassi","price":"3.50"}],
	},
	{
		"name":"Cusato's Pizzeria & Deli",
		"location":"Rensselaer Union",
		"status" : "Closing Soon",
		"restaurantId":32132323,
		"imgUrl":"http://blahblah",
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
	cart: {},
}
*/