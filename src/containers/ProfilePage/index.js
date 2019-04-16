import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

// Component for the Profile Page of the Application

const ProfilePage = (props) => {

	let { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.logoutButtonContainer}>
				<Link to="/login" className={classes.buttonLink}>
					<Button
						variant="contained"
						color="primary"
					>
						Logout
					</Button>
				</Link>
			</div>
		</div>
	);

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

export default withStyles(styles, { withTheme: true })(ProfilePage);
