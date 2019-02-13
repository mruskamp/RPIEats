import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { isFetchingRestaurants, getRestaurants } from './selectors';

class RestaurantsPage extends Component {

	constructor(props){
		super(props);
	}

	render() {
		let { classes, restaurants } = this.props;
		return (
			<div className={classes.root}>
				<div style={{ paddingTop: 70 }}>
				<Paper className={classes.listContainer} >
					<List className={classes.restaurantList} >
						{restaurants.map((restaurant) => (
							<Fragment key={`${restaurant.name}`} >
								<ListItem>
									<ListItemText
										primary={restaurant.name}
										secondary={Object.keys(restaurant.hours).map((day) => (
												<span key={`${restaurant.name}#${day}`}>
													{day}: {restaurant.hours[day]} <br/>
												</span>
											))}
									/>
								</ListItem>
							</Fragment>
							))}
					</List>
				</Paper>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		restaurants: getRestaurants(state),
		loadingRestaurants: isFetchingRestaurants(state),
	};
}

const styles = {
	root: {
		backgroundColor: '#ccc',
		height: '100vh',
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	listContainer: {
		width: '70%',
		margin: 'auto',
	},
	restaurantList: {
		backgroundColor: '#fff',
	}
};

export default withStyles(styles)(
	connect(mapStateToProps)(RestaurantsPage)
);
