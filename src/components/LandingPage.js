import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import logo from '../RPIEats_Logo.png';

const LandingPage = (props) => {

	let { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.titleContainer}>
				<img src={logo} alt={""} height={190} width={300} />
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
