import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText, IconButton, Tooltip} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { getRestaurantByName } from '../../data/restaurants/selectors';
import { getUserType } from '../../data/session/selectors';
import { addItem } from '../../data/cart/actions';

class MenuPage extends Component {

  handleClick = (item, restaurantId) => {
		this.props.addItem(item, restaurantId);
		alert("An item has been added to your cart!");
  };

	render() {
		let { classes, name } = this.props;
		let { menu, imgURL, restaurantId } = this.props.restaurant;
		return (
			<div className={classes.root}>
				<div className={classes.imageContainer}>
					<img src={imgURL} alt={""} height={100} width={100} />
				</div>
				<div>
					<h3>{name}</h3>
				</div>
				<List>
					{menu.map((item) => (
						<ListItem key={item.name}>
							<ListItemText
								primary={item.name}
								secondary={`$${item.price}`}
							/>
							{this.props.userType === "customer" &&
								<Tooltip title="Add an item to cart" aria-label="Add an item to cart" placement="right">
									<IconButton onClick={() => this.handleClick(item, restaurantId)}>
										<AddCircleIcon /> 
									</IconButton>
								</Tooltip>
							}
						</ListItem>
						))}
				</List>
			</div>
		);
	}

}

function mapStateToProps(state, ownProps) {
	let name = ownProps.match.params.restaurantName;
	return {
		name,
		userType: getUserType(state),
		restaurant: getRestaurantByName(state, name),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addItem: (item, restaurantId) => dispatch(addItem(item, restaurantId)),
	}
}

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	imageContainer: {
		paddingTop: 10,
		justifyContent: 'center',
		alignItem: 'center',
	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(MenuPage))
);
