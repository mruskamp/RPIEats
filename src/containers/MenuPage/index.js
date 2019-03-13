import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { getMenu, getImage } from './selectors';
import { addItem } from '../CartPage/actions';


class MenuPage extends Component {

	render() {
		let { classes, name, menu, imgUrl } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.titleContainer}>
					<img src={imgUrl} alt={""} height={40} width={40} />
					<h3>{name}</h3>
				</div>
				<List className={classes.menuContainer}>
					{menu.map((item) => (
						<ListItem key={item.name}>
							<ListItemText
								primary={item.name}
								secondary={`$${item.price}`}
							/>
							<IconButton onClick={() => this.props.addItem(item, name)}>
								<AddCircleIcon /> 
							</IconButton>
						</ListItem>
						))}
				</List>
			</div>
		);
	}

}

function mapStateToProps(state, ownProps) {
	let name = ownProps.match.params.restaurantName;
	return {
		name,
		menu: getMenu(state, name),
		imgUrl: getImage(state, name),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addItem: (item) => dispatch(addItem(item)),
	}
}

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	titleContainer: {

	},
	menuContainer: {

	},
};

export default withRouter(withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(MenuPage))
);
