import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

// import { getItems, getImage } from './selectors';
import { getItems, getOrderSummary } from './selectors';

class StatusPage extends Component {

	render() {
		let { classes, items, orderSummary, imgUrl } = this.props;
		return (
			<div className={classes.root}>
				{/* <div className={classes.imageContainer}>
					<img src={imgUrl} alt={""} height={100} width={100} />
				</div> */}
				<div className={classes.titleContainer}>
					<h2>Order Details</h2>
				</div>
				<List className={classes.itemsContainer}>
					{items.map((item) => (
						<ListItem key={item.id}>
							<ListItemText
								primary={item.name}
								// secondary={`$${item.location}`}
							/>
						</ListItem>
						))}
				</List>
			</div>
		);
	}

}

function mapStateToProps(state, ownProps) {
	let orderId = ownProps.match.params.orderId;
	return {
		orderId,
		items: getItems(state, orderId),
		orderSummary: getOrderSummary(state, orderId),
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

	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(StatusPage))
);
