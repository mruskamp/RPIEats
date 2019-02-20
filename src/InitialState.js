const tempRestaurants = [
	{
		"name":"Thunder Mountain Curry",
		"location":"Rensselaer Union",
		"status" : "Open Now",
		"restaurantId":32132,
		"imgUrl":"http://blahblah"
	},
	{
		"name":"Cusato's Pizzeria & Deli",
		"location":"Rensselaer Union",
		"status" : "Closing Soon",
		"restaurantId":32132323,
		"imgUrl":"http://blahblah"
	},
]


const tempRestaurantData = {
	restaurants: [],
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
		isUpdating: false,
		restaurants: [],
	}
}
*/