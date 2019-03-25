import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, IconButton, Typography, Divider, Button, TextField } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/styles';

import { getItems, getCartCost, getOrder, getRestaurant } from './selectors';
import { placeOrder, addItem, removeItem, clearCart } from './actions';

class CartPage extends Component {

	constructor(props) {
		super(props);
		this.state = { deliverTo: '' }
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
				tax: this.getTax(this.props.cartCost),
				orderTotal: this.props.cartCost + this.getDeliveryFee() + this.getTax(this.props.cartCost),
			},
		}
		this.props.placeOrder(order);
		this.props.clearCart();
	}

	render() {
		let { classes, items, cartCost } = this.props;
		return (
			<div className={classes.root}>
				<List className={classes.restaurantList}>
				{items.length > 0 ? (
					<div>
						{items.map((item, index) => (
							<ListItem key={`${item.name}#${index}`}>
								<ListItemText
									primary={item.name}
									secondary={`$${item.price} x ${item.count} = $${parseFloat(item.price)*parseFloat(item.count)}`}
								/>
								<IconButton onClick={() => this.props.removeItem(item)}>
									<RemoveCircleIcon /> 
								</IconButton>
								<IconButton onClick={() => this.props.addItem(item)}>
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
				<Link
					to="/orders"
					onClick={(e) => {
						if (this.state.deliverTo === '')
							e.preventDefault();
					}}
					className={classes.placeOrderButtonLink}
				>
					<div className={classes.placeOrderButtonContainer}>
							<Button
								variant="contained"
								disabled={this.state.deliverTo === ''}
								className={classes.placeOrderButton}
								onClick={() => this.placeOrder(this.props.order)}
							>
								Place Order
							</Button>
					</div>
				</Link>
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
		addItem: (item) => dispatch(addItem(item)),
		removeItem: (item) => dispatch(removeItem(item)),
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
	placeOrderButtonLink: {
		textDecorationLine: 'none',
	},
	placeOrderButtonContainer: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '2rem',
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
