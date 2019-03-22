import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { getItems, getImage, getOrder, getOrderSummary } from './selectors';

class StatusPage extends Component {

	render() {
		let { classes, items, imgUrl, order, orderSummary } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.imageContainer}>
					<img src={imgUrl} alt={""} height={100} width={100} />
				</div>
				<div className={classes.titleContainer}>
					<h2>{orderSummary.vendor}</h2>
					<h3>Order Details</h3>
					<h5>Deliver To: {order.deliveryDetails.deliverTo}</h5>
					<h5>Status: {order.status}</h5>
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
								primary={`Order Total: ${orderSummary.total}`}>
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
		order: getOrder(state, orderId),
		orderSummary: getOrderSummary(state, orderId),
		items: getItems(state, orderId),
		imgUrl: getImage(state, orderId),
	};
}

function mapDispatchToProps(dispatch) {
	return {

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
	itemsContainer: {
		marginRight: '6rem',
	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(StatusPage))
);
