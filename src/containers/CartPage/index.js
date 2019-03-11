import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { getItems } from './selectors';

class CartPage extends Component {

	render() {
		let { classes, items } = this.props;
		return (
			<div className={classes.root}>
				
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		items: getItems(state) || [],
	};
}

const styles = {
	root: {
		backgroundColor: '#ccc',
		height: '100%',
	},
};

export default withStyles(styles)(
	connect(mapStateToProps)(CartPage)
);
