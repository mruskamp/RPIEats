import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { getOrders } from './selectors';
import { fetchOrders, fetchActiveOrders } from './actions';

class OrdersPage extends Component {

	refresh = () => {
		if (this.props.userType !== ""){
			if (this.props.userType === "customer") {
				this.props.fetchOrders(this.props.username, true);
			}
			else {
				this.props.fetchOrders(this.props.username, false);
				this.props.fetchActiveOrders();
			}
		}
	}

	render() {
		let { classes, orders, activeOrders } = this.props;
		return (
			<div className={classes.root}>
			<Button onClick={this.refresh} >
				Refresh
			</Button>
				<div>
					<List className={classes.orderList} >
						{orders.map((order, index) => (
							<Fragment key={`${order.orderId}`} >
								<Link to={`/order/status/${order.orderId}`} className={classes.orderText}>
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
							</Fragment>
							))}
						{activeOrders.length > 0 &&
							<h1>Order Pool</h1>
						}
						{activeOrders.map((order, index) => (
							<Fragment key={`${order.orderId}`} >
								<Link to={`/order/status/${order.orderId}`} className={classes.orderText}>
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
							</Fragment>
							))}
					</List>
				</div>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		userType: state.session.userType,
		username: state.session.username,
		ordersFetchFailed: state.orderData.errorFetchingOrders,
		orders: getOrders(state),
		activeOrders: state.orderData.activeOrders,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchOrders: (username, customer) => dispatch(fetchOrders(username, customer)),
		fetchActiveOrders: () => dispatch(fetchActiveOrders()),
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

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(OrdersPage)
);
