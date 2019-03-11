import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const LandingPage = (props) => {

	let { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.titleContainer}>
				<Typography
					variant="h2"
					color="primary"
				>
					RPI Eats
				</Typography>
			</div>
			<div className={classes.loginButtonContainer}>
				<Link to="/login" className={classes.buttonLink}>
					<Button
						variant="contained"
						color="primary"
					>
						LogIn
					</Button>
				</Link>
			</div>
		</div>
	);

}

const styles = {
	root: {
		textAlign: 'center',
		height: '100%',
		backgroundColor: '#ccc',
	},
	titleContainer: {
		margin: 'auto',
		paddingTop: 100,
		width: 350,
		borderBottom: '3px solid black',
	},
	subtitleContainer: {
		marginTop: 20,
	},
	loginButtonContainer: {
		marginTop: 30,
	},
	buttonLink: {
		textDecoration: 'none',
	},
}

export default withStyles(styles, { withTheme: true })(LandingPage);
