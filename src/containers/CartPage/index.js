import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { List, ListItem, ListItemText, IconButton, Typography, Divider, Button, TextField } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/styles';

import { getItems, getCartCost, getOrder, getRestaurant } from './selectors';
import { placeOrder } from './actions';

class CartPage extends Component {

	constructor(props) {
		super(props);
		this.state = { deliverTo: '' }
	}

	handleDeliverToInput = (event) => this.setState({ deliverTo: event.target.value })

	getDeliveryFee = () => 2.00;
	getTax = () =>	0.5;

	placeOrder = () => {
		let { restaurant } = this.props;
		let order = {
			// orderId: '123',
			restaurantId: restaurant.restaurantId,
			user: 'jvparin',
			deliveryDetails: {
				deliverTo: this.state.deliverTo,
				name: 'John',
				phone: '555-555-555'
			},
			orderSummary: {
				restaurant: restaurant.name,
				location: restaurant.location,
				itemDetails:
					this.props.items.map(({ id, name, price, count }) => {
						return {
							id: id,
							name: name,
							unitPrice: price,
							qty: count,
							totalPrice: price * count,
						}
					}),
				subtotal: this.props.cartCost,
				deliveryFee: this.getDeliveryFee(),
				tax: this.getTax(),
				orderTotal: this.props.cartCost + this.getDeliveryFee() + this.getTax(),
			},
		}
		this.props.placeOrder(order);
	}

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
							primary="DeliveryFee"
							secondary={this.getDeliveryFee()}
						/>
					</ListItem>
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
									<Typography variant="h6">{`$${cartCost + this.getDeliveryFee() + this.getTax()}`}</Typography>
								</div>
							}
						/>
					</ListItem>
				</List>
				<TextField
					id="standard-multiline-flexible"
					label="Deliver To"
					multiline
					rowsMax="2"
					value={this.state.deliverTo}
					onChange={this.handleDeliverToInput}
					className={classes.deliverToInput}
					margin="normal"
		        />
				<div className={classes.placeOrderButtonContainer}>
					<Button
						variant="contained"
						disabled={this.state.deliverTo === ''}
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
		restaurant: getRestaurant(state),
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
	deliverToInput: {
		margin: 'auto',
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