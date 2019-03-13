import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, ListItem, ListItemText, IconButton, Typography, Divider, Button } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/styles';

import { getItems, getCartCost, getOrder } from './selectors';
import { placeOrder } from './actions';

class CartPage extends Component {

	getTax = () =>	0.5;

	render() {
		let { classes, items, cartCost } = this.props;
		return (
			<div className={classes.root}>
				<List className={classes.restaurantList}>
					{items.map((item, index) => (
						<ListItem key={`${item.name}#${index}`} className={classes.listItem}>
							<ListItemText
								primary={item.name}
								secondary={`$${item.price} x ${item.count} = $${parseFloat(item.price)*parseFloat(item.count)}`}
							/>
							<IconButton>
								<RemoveCircleIcon /> 
							</IconButton>
							<IconButton>
								<AddCircleIcon /> 
							</IconButton>
						</ListItem>
						))}
					<Divider />
					<ListItem>
						<ListItemText
							variant="h6"
							primary="Tax"
							secondary={this.getTax()}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							disableTypography
							primary={
								<div className={classes.totalCostContainer}>
									<Typography variant="h6">Order Total</Typography>
									<Typography variant="h6">{`$${cartCost + this.getTax()}`}</Typography>
								</div>
							}
						/>
					</ListItem>
				</List>
				<div className={classes.placeOrderButtonContainer}>
					<Button
						variant="contained"
						className={classes.placeOrderButton}
						onClick={() => this.props.placeOrder(this.props.order)}
					>
						Place Order
					</Button>
				</div>
			</div>
		);
	}

}
CartPage.propTypes = {
	items: PropTypes.array,
	cartCost: PropTypes.number,
}

function mapStateToProps(state) {
	return {
		items: getItems(state) || [],
		cartCost: getCartCost(state),
		order: getOrder(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		placeOrder: (order) => dispatch(placeOrder(order)),
	};
}

const styles = {
	root: {
		backgroundColor: '#ccc',
		height: '100%',
		width: '100%',
	},
	listItem: {
	},
	itemTextContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemName: {
		flex: 3,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	itemPrice: {
		flex: 1,
	},
	totalCostContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	placeOrderButtonContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	placeOrderButton: {
		backgroundColor: 'green',
		color: '#fff',
		margin: 'auto',
		'&:hover': {
	      backgroundColor: '#fff',
	      color: 'green',
	    }
	},
};

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(CartPage)
);
