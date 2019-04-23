import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import {
	getRestaurants,
	isFetchingRestaurants,
	successFetchingRestaurants,
	errorFetchingRestaurants,
} from '../../data/restaurants/selectors';
import { fetchRestaurants } from '../../data/restaurants/actions';

class RestaurantsPage extends Component {

	componentDidMount() {
		if (!this.props.loadingRestaurants && !this.props.errorLoadingRestaurants) {
			this.props.loadRestaurants();
		}
	}

	renderErrorMessage = () => {
		return (<h2>Error Loading Restaurants</h2>);
	}

	renderLoadingMessage = () => {
		return (<h2>Loading Restaurants</h2>);
	}

	render() {
		let { classes, restaurants } = this.props;

		// indicate to user restaurants are loading
		if (this.props.loadingRestaurants)
			return this.renderLoadingMessage()

		// show message if there was an error loading the restaurants
		if (this.props.errorLoadingRestaurants)
			return this.renderErrorMessage();

		return (
			<div className={classes.root}>
				<div>
				<div>
					<List className={classes.restaurantList} >
						{restaurants.map((restaurant, index) => (
							<Fragment key={`${restaurant.name}`} >
								<Link to={`restaurant/${restaurant.name}`} className={classes.restaurantText}>
									<ListItem divider={index !== restaurants.length-1} >
										<img src={restaurant.imgURL} alt={""} height={50} width={50} />
										<ListItemText
											disableTypography
											primary={restaurant.name}
											secondary={
												<div className={classes.subtextContainer}>
													<p>{restaurant.location}</p>
													<p style={{ color: restaurant.status === "Open" ? 'green' : 'red' }}>
														{restaurant.status}
													</p>
												</div>
											}
										/>
									</ListItem>
								</Link>
							</Fragment>
							))}
					</List>
				</div>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		loadingRestaurants: isFetchingRestaurants(state),
		errorLoadingRestaurants: errorFetchingRestaurants(state),
		successLoadingRestaurants: successFetchingRestaurants(state),
		restaurants: getRestaurants(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadRestaurants: () => dispatch(fetchRestaurants()),
	};
}

const styles = {
	root: {
		backgroundColor: '#ccc',
		flexDirection: 'column',
		height: '100%',
	},
	restaurantList: {
		backgroundColor: '#fff',
	},
	restaurantText: {
		textDecorationLine: 'none',
	},
	subtextContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '15px',
		color: 'grey',
	}
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps)
)(RestaurantsPage);
