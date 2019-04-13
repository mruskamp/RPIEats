import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText, IconButton, Tooltip} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { getMenu, getImage, getRestaurantId } from './selectors';
import { addItem } from '../CartPage/actions';

class MenuPage extends Component {

  handleClick = (item, restaurantId) => {
		alert("An item has been added to your cart! Please go to your cart page.");
		this.props.addItem(item, restaurantId);
  };

	render() {
		let { classes, name, menu, imgURL, restaurantId } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.imageContainer}>
					<img src={imgURL} alt={""} height={100} width={100} />
				</div>
				<div className={classes.titleContainer}>
					<h3>{name}</h3>
				</div>
				<List className={classes.menuContainer}>
					{menu.map((item) => (
						<ListItem key={item.name}>
							<ListItemText
								primary={item.name}
								secondary={`$${item.price}`}
							/>
							<Tooltip title="Add an item to cart" aria-label="Add an item to cart" placement="right">
								<IconButton onClick={() => this.handleClick(item, restaurantId)}>
									<AddCircleIcon /> 
								</IconButton>
							</Tooltip>
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
		restaurantId: getRestaurantId(state, name),
		menu: getMenu(state, name),
		imgURL: getImage(state, name),
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
	titleContainer: {

	},
	menuContainer: {

	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(MenuPage))
);
