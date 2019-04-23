import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { logout } from '../../data/session/actions';

const ProfilePage = (props) => {
	console.log(props);

	let { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.logoutButtonContainer}>
				<Link to="/login" className={classes.buttonLink}>
					<Button
						variant="contained"
						color="primary"
						onClick={props.logout}
					>
						Logout
					</Button>
				</Link>
			</div>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		logout: () => dispatch(logout()),
	}
}

const styles = {
	root: {
		textAlign: 'center',
		height: '100vh',
		width: '100%',
		backgroundColor: '#ccc',
	},
	logoutButtonContainer: {
		paddingTop: 30,
	},
	buttonLink: {
		textDecoration: 'none',
	},
}

export default compose(
	withStyles(styles),
	connect(null, mapDispatchToProps)
)(ProfilePage)

