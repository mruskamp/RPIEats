import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText, IconButton, Typography, Divider, Button, TextField } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/styles';

import { addItem, removeItem, placeOrder, clearCart } from '../../data/cart/actions';
import {
	getCartItems,
	getCartCost,
	getCartRestaurantId,
	isPlacingOrder,
	placeOrderSuccess,
	placeOrderError,
} from '../../data/cart/selectors';
import { getRestaurantById } from '../../data/restaurants/selectors';

// Component for the Cart Page of the Application
class CartPage extends Component {

	constructor(props) {
		super(props);
		this.state = { deliverTo: '' }
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.placeOrderSuccess) {
			// if the order was placed successfully it re-directs to orders page
			this.props.history.push('/orders');
			// also clears the cart
			this.props.clearCart();
		}
		return true;
	}

	handleDeliverToInput = (event) => this.setState({ deliverTo: event.target.value })

	getDeliveryFee = () => 2.00;
	getTax = (subtotal) =>	subtotal > 0 ? subtotal * 0.08 : 0;

	placeOrder = () => {
		let { restaurant } = this.props;
		let order = {
			restaurantId: restaurant.restaurantId,
			imgURL: restaurant.imgURL,
			user: 'jvparin',
			deliveryDetails: {
				deliverTo: this.state.deliverTo,
				name: 'John',
				phone: '555-555-555'
			},
			orderSummary: {
				vendor: restaurant.name,
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
				tax: this.getTax(this.props.cartCost),
				orderTotal: this.props.cartCost + this.getDeliveryFee() + this.getTax(this.props.cartCost),
			},
		}
		this.props.placeOrder(order);
	}

	render() {
		let { classes, items, cartCost, restaurant } = this.props;
		return (
			<div className={classes.root}>
				<List>
				{items.length > 0 ? (
					<div>
						{items.map((item, index) => (
							<ListItem key={`${item.name}#${index}`}>
								<ListItemText
									primary={item.name}
									secondary={`$${item.price} x ${item.count} = $${parseFloat(item.price)*parseFloat(item.count)}`}
								/>
								<IconButton onClick={() => this.props.removeItem(item, restaurant.restaurantId)}>
									<RemoveCircleIcon /> 
								</IconButton>
								<IconButton onClick={() => this.props.addItem(item, restaurant.restaurantId)}>
									<AddCircleIcon /> 
								</IconButton>
							</ListItem>
						))}
					</div>
					) : (
					<ListItem>
						Your cart is empty! <br /> Start adding items to your cart from a restaurant.
					</ListItem>
				)}
					<Divider />
					<ListItem>
						<ListItemText
							variant="h6"
							primary="Delivery Fee"
							secondary={`$${this.getDeliveryFee()}`}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							variant="h6"
							primary="Tax"
							secondary={`$${this.getTax(cartCost)}`}
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							disableTypography
							primary={
								<div className={classes.totalCostContainer}>
									<Typography variant="h6">Order Total</Typography>
									<Typography variant="h6">{`$${cartCost + this.getDeliveryFee() + this.getTax(cartCost)}`}</Typography>
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
							onClick={this.placeOrder}
						>
							Place Order
						</Button>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		items: getCartItems(state),
		cartCost: getCartCost(state),
		restaurantId: getCartRestaurantId(state),
		restaurant: getRestaurantById(state, getCartRestaurantId(state)),
		isPlacingOrder: isPlacingOrder(state),
		placeOrderSuccess: placeOrderSuccess(state),
		placeOrderError: placeOrderError(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		placeOrder: (order) => dispatch(placeOrder(order)),
		addItem: (item, restaurantId) => dispatch(addItem(item, restaurantId)),
		removeItem: (item, restaurantId) => dispatch(removeItem(item, restaurantId)),
		clearCart: () => dispatch(clearCart()),
	};
}

const styles = {
	root: {
		height: '100%',
		width: '100%',
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
		paddingTop: '2rem',
	},
	deliverToInput: {
		marginLeft: '1rem',
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

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
	)(withRouter(CartPage))

