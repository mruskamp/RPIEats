import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

// import { getItems, getImage } from './selectors';
import { getItems } from './selectors';

class StatusPage extends Component {

	render() {
		let { classes, items, orderId, imgUrl } = this.props;
		return (
			<div className={classes.root}>
				{/* <div className={classes.imageContainer}>
					<img src={imgUrl} alt={""} height={100} width={100} />
				</div> */}
				<div className={classes.titleContainer}>
					<h3>Order Details</h3>
				</div>
				<List className={classes.itemsContainer}>
					{items.map((item) => (
						<ListItem key={item.vendor}>
							<ListItemText
								primary={item.itemDetails}
								secondary={`$${item.price}`}
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
		// imgUrl: getImage(state, name),
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
	itemContainer: {

	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(StatusPage))
);
