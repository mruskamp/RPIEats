import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Paper, Input, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Typography } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { withStyles } from '@material-ui/styles';

import { login } from '../../data/session/actions';
import { getUsername, isLoggingIn, loginFailed } from '../../data/session/selectors';

class LogInPage extends Component {

	constructor(props){
		super(props);
		this.state = { username: '', password: '', userType: '' }
	}

	componentDidMount() {
		// if they are already logged in then redirect them to the restaurants page
		if (this.props.username !== "")
			this.props.history.push('/restaurants');
	}

	// handlers for entering login information to store in the state
	handleUsernameInput = ({ target }) => this.setState({ username: target.value });
	handlePasswordInput = ({ target }) => this.setState({ password: target.value });
	handleUserTypeChange = (event) => this.setState({ userType: event.target.value });

	handleLoginSubmit = (event) => {
		this.props.login(this.state.username, this.state.password, this.state.userType);
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
		        	{this.props.loginFailed &&	/* display error on failed login */
		        		<Typography>Wrong username or password</Typography>
		        	}
		        	{this.props.loggingIn &&
		        		<Typography>Loading</Typography>
		        	}
					<div className={classes.loginButtonContainer}>
						<Button
								color="primary"
							variant="contained"
							onClick={this.handleLoginSubmit}
						>
							Login
						</Button>
					</div>
		        </Paper>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		username: getUsername(state),
		loggingIn: isLoggingIn(state),
		loginFailed: loginFailed(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		login: (username, password, userType) => dispatch(login(username, password, userType)),
	};
}


const styles = {
	root: {
		backgroundColor: '#ccc',
		textAlign: 'center',
		height: '100vh',
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

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
	)(withRouter(LogInPage));