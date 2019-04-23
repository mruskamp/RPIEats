import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import {
	isFetchingOrders,
	errorFetchingOrders,
	getOrders,
	isFetchingActiveOrders,
	errorFetchingActiveOrders,
	getActiveOrders,
} from '../../data/orders/selectors';
import {
	fetchOrders,
	fetchActiveOrders,
	updateOrderStatus,
} from '../../data/orders/actions'

class OrdersPage extends Component {

	componentDidMount() {
		// initially loads the orders on component mount
		this.refreshOrders();
	}

	refreshOrders = () => {
		if (!this.loadingOrders) {
			// if not already loading, re-load the orders
			this.props.fetchOrders(this.props.username, this.props.userType === "customer");
		}

		if (!this.loadingActiveOrders) {
			// if not already loading, re-load the active orders
			this.props.fetchActiveOrders();
		}
	}

	// loading and error are bools for if the data is loading or errored loading
	renderLoadOrErrorMessage = (loading, error) => {
		if (loading)
			return (<h2>Loading</h2>);
		if (error)
			return (<h2>Error Loading</h2>);
	}

	handleAcceptActiveOrder = (orderId) => {
		this.props.acceptOrder(orderId);
	}

	render() {
		let { classes, orders, activeOrders } = this.props;
		return (
			<div className={classes.root}>
			<Button onClick={this.refreshOrders} >
				Refresh
			</Button>
				<div>
					<h1>Your Orders</h1>
					{this.props.loadingOrders || this.props.errorLoadingOrders
						?	/* ternary that loads message while loading or on erorr */
						this.renderLoadOrErrorMessage(this.props.loadingOrders,
							this.props.errorLoadingOrders)
						:	/* if not loading and no error then show orders */
						<List className={classes.orderList}>
							{orders.map((order, index) => (
								<Link
									key={`${order.orderId}`}
									to={`/order/status/${order.orderId}`}
									className={classes.orderText}
								>
									<ListItem divider={index !== orders.length-1} >
										<ListItemText
											disableTypography
											primary={order.orderSummary.vendor}
											secondary={
												<div className={classes.subtextContainer}>
													<p>{order.orderSummary.location}</p>
													<p style={{ color: order.status === "cancelled" ? 'red' : ( order.status === "no show" ? 'orange' : 'green' )}} className={classes.orderStatus}>
														Status: {order.status}
													</p>
												</div>
											}
										/>
									</ListItem>
								</Link>
								))}
						</List>
					}
					{this.props.userType === "deliverer" &&
						<Fragment>
							<h1>Order Pool</h1>
							{this.props.loadingActiveOrders || this.props.errorLoadingActiveOrders
								?	/* ternary that loads message while loading or on erorr */
								this.renderLoadOrErrorMessage(this.props.loadingActiveOrders,
									this.props.errorLoadingActiveOrders)
								:	/* if not loading and no error then show active orders */
								<List className={classes.orderList} >
									{activeOrders.map((order, index) => (
										<Link
											key={`${order.orderId}`}
											to={`/order/status/${order.orderId}`}
											className={classes.orderText}
										>
											<ListItem divider={index !== orders.length-1} >
												<ListItemText
													disableTypography
													primary={order.orderSummary.vendor}
													secondary={
														<div className={classes.subtextContainer}>
															<p>{order.orderSummary.location}</p>
															<p style={{ color: order.status === "cancelled" ? 'red' : ( order.status === "no show" ? 'orange' : 'green' )}} className={classes.orderStatus}>
																Status: {order.status}
															</p>
														</div>
													}
												/>
												<Button
													onClick={() => this.handleAcceptActiveOrder(order.orderId)}
												>
													Accept
												</Button>
											</ListItem>
										</Link>
										))}
								</List>
							}
						</Fragment>
					}
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		loadingOrders: isFetchingOrders(state),
		errorLoadingOrders: errorFetchingOrders(state),
		orders: getOrders(state),
		loadingActiveOrders: isFetchingActiveOrders(state),
		errorLoadingActiveOrders: errorFetchingActiveOrders(state),
		activeOrders: getActiveOrders(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchOrders: (username, customer) => dispatch(fetchOrders(username, customer)),
		fetchActiveOrders: () => dispatch(fetchActiveOrders()),
		acceptOrder: (orderId) => dispatch(updateOrderStatus(orderId, 'accepted')),
	}
}

const styles = {
	root: {
		backgroundColor: '#ccc',
		flexDirection: 'column',
		height: '100%',
	},
	orderList: {
		backgroundColor: '#fff',
	},
	orderText: {
		textDecorationLine: 'none',
	},
	orderStatus: {
		textTransform: 'capitalize',
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
)(OrdersPage)
