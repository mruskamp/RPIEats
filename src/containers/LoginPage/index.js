import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Paper, Input, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Typography } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { withStyles } from '@material-ui/styles';

class LogInPage extends Component {

	constructor(props){
		super(props);
		this.state = { username: '', password: '', userType: '' }
	}

	handleUsernameInput = ({ target }) => this.setState({ username: target.value });

	handlePasswordInput = ({ target }) => this.setState({ password: target.value });

	handleUserTypeChange = (event) => this.setState({ userType: event.target.value });

	handleLoginSubmit = (event) => {
		this.setState({ username: '', password: '' })
		alert("username: " + this.state.username +
			"\npassword: " + this.state.password + 
			"\nuser type: " + this.state.userType);
	}

	render() {
		let { classes } = this.props;
		let { username, password } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.headingContainer}>
					<Typography
						variant="h3"
						color="primary"
					>
						<TagFacesIcon /> Never Stay Hungry <TagFacesIcon />
					</Typography>
				</div>
		        <Paper className={classes.loginPaper}>
		        	<div className={classes.loginFieldsContainer}>
								<Input
									className={classes.loginFields}
									type="text"
									placeholder="Username"
									value={username}
									onChange={this.handleUsernameInput}
								/>
								<Input
									className={classes.loginFields}
									type="password"
									placeholder="Password"
									value={password}
									onChange={this.handlePasswordInput}
								/>
								<FormControl component="fieldset" className={classes.loginFields}>
									<FormLabel component="legend">Are you a...</FormLabel>
									<RadioGroup
										aria-label="position"
										name="position"
										value={this.state.userType}
										onChange={this.handleUserTypeChange}
										row
									>
										<FormControlLabel
											value="customer"
											control={<Radio color="primary" />}
											label="Customer"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="deliverer"
											control={<Radio color="primary" />}
											label="Deliverer"
											labelPlacement="end"
										/>
									</RadioGroup>
								</FormControl>
		        	</div>
							<div className={classes.loginButtonContainer}>
								<Link to="/restaurants" className={classes.buttonLink}>
									<Button
											color="primary"
										variant="contained"
										onClick={this.handleLoginSubmit}
									>
										Login
									</Button>
								</Link>
							</div>
		        </Paper>
			</div>
		);
	}

}

const styles = {
	root: {
		backgroundColor: '#ccc',
		textAlign: 'center',
		height: '100vh',
		width: '100%',
		padding: 15,
	},
	headingContainer: {
		padding: 15,
	},
	loginPaper: {
		margin: 'auto',
		width: 500,
		padding: 40,
		backgroundColor: '#fff'
	},
	loginFields: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: '100%',
		marginTop: 20,
		textAlign: 'left',
	},
	loginButtonContainer: {
		marginTop: 40,
	},
	buttonLink: {
		textDecoration: 'none',
	},
};

export default withStyles(styles)(LogInPage);
