import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


class CartPage extends Component {

	render() {
		let { classes } = this.props;
		return (
			<div className={classes.root}>

			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
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
