import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { getRestaurants } from './selectors';

// Component for the Restaurants Page of the Application

class RestaurantsPage extends Component {

	render() {
		let { classes, restaurants } = this.props;
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
		restaurants: getRestaurants(state),
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

export default withStyles(styles)(
	connect(mapStateToProps)(RestaurantsPage)
);
