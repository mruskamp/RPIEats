import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { List, ListItem, ListItemText, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { isFetchingRestaurants, getRestaurants } from './selectors';
import { fetchRestaurants } from './actions';

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
									<img src={restaurant.imgURL} alt={""} height={40} width={40} />
									<ListItemText
										disableTypography
										primary={restaurant.name}
										secondary={
											<div className={classes.subtextContainer}>
												<p>{restaurant.location}</p>
												<p style={{ color: restaurant.status === "Open Now" ? 'green' : 'red' }}>
													{restaurant.status}
												</p>
											</div>
										}
									/>
								</ListItem>
							</Fragment>
							))}
					</List>
				</Paper>
				<Button onClick={this.props.fetchRestaurants}>
					Fetch Restaurants
				</Button>
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

function mapDispatchToProps(dispatch) {
	return {
		fetchRestaurants: () => dispatch(fetchRestaurants()),
	}
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
		// width: '70%',
		margin: 'auto',
	},
	restaurantList: {
		backgroundColor: '#fff',
	},
	subtextContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '15px',
		color: 'grey',
	}
};

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(RestaurantsPage)
);
