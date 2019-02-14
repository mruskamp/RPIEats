const tempRestaurantData = {
	restaurants: [
		{ name: "Hallal Shack", hours: { monday: "11-9", tuesday: "11-9", } },
		{ name: "Panera", hours: { monday: "10-7", tuesday: "10-7" } },
		{ name: "Custato's", hours: { monday: "11-11", tuesday: "11-11" } },
	],
	isFetchingRestaurants: false,
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