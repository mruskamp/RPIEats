import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText, Select, MenuItem, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { getItems, getImage, getOrder, getOrderSummary } from './selectors';
import { updateOrderStatus } from './actions';

// Component for the Status Page of the Application

class StatusPage extends Component {

	handleStatusChange = (event) => {
		this.props.updateOrderStatus(event.target.value, this.props.username);
	}

	render() {
		let { classes, items, order, orderSummary } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.titleContainer}>
					<h2>{orderSummary.vendor}</h2>
					<h3>Order Details</h3>
					<h5>Deliver To: {order.deliveryDetails.deliverTo}</h5>
					<h5>Status: {order.status}</h5>
					<h5>Estimated Time of Arrival: {
					 order.status === 'active' ? '40 minutes':
					(order.status === 'accepted' ? '35 minutes':  
					(order.status === 'ordered' ? '30 minutes': 
					(order.status === 'awaiting order' ? '25 minutes':
					(order.status === 'in transit' ? '10 minutes':  
					(order.status === 'delivered' ? '0 minutes': 
					(order.status === 'no show' ? '0 minutes': 
					(order.status === 'cancelled' ? '0 minutes': 
					'0 minutes')))))))}</h5>
					{this.props.userType === "deliverer" &&
						<FormControl>
							<Select
								value={order.status}
								onChange={this.handleStatusChange}
							>
								<MenuItem className={classes.statusMenuItem} value={'accepted'}>Accepted</MenuItem>
								<MenuItem className={classes.statusMenuItem} value={'ordered'}>Ordered</MenuItem>
								<MenuItem className={classes.statusMenuItem} value={'awaiting order'}>Awaiting Order</MenuItem>
								<MenuItem className={classes.statusMenuItem} value={'in transit'}>In Transit</MenuItem>
								<MenuItem className={classes.statusMenuItem} value={'delivered'}>Delivered</MenuItem>
								<MenuItem className={classes.statusMenuItem} value={'no show'}>No Show</MenuItem>
								<MenuItem className={classes.statusMenuItem} value={'cancelled'}>Cancelled</MenuItem>
							</Select>
						</FormControl>
					}
				</div>
				<List className={classes.itemsContainer}>
					{items.map((item) => (
						<ListItem key={item.id}>
							<ListItemText
								primary={item.name}
								secondary={`$${item.unitPrice} x ${item.qty} = $${item.totalPrice}`}
							/>
						</ListItem>
						))}
						<ListItem>
							<ListItemText
								primary={`Sub Total: $${orderSummary.subTotal}`}
								secondary={`Delivery Fee: $${orderSummary.deliveryFee}, Tax: $${orderSummary.tax}`}>
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText
								primary={`Order Total: $${orderSummary.total}`}>
							</ListItemText>
						</ListItem>
				</List>
			</div>
		);
	}

}

function mapStateToProps(state, ownProps) {
	let orderId = ownProps.match.params.orderId;
	return {
		orderId,
		username: state.session.username,
		userType: state.session.userType,
		order: getOrder(state, orderId),
		orderSummary: getOrderSummary(state, orderId),
		items: getItems(state, orderId),
		imgURL: getImage(state, orderId),
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	let orderId = ownProps.match.params.orderId;
	return {
		updateOrderStatus: (status, username) => dispatch(updateOrderStatus(orderId, status, username)),
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
		textTransform: 'capitalize',
	},
	itemsContainer: {
		marginRight: '6rem',
	},
	statusMenuItem: {
		backgroundColor: '#fff',
		'&:hover': { backgroundColor: '#ccc' }
	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(StatusPage))
);
