import React, { Component } from 'react';

import { Paper, Input, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

class LogInPage extends Component {

	constructor(props){
		super(props);
		this.state = { username: '', password: '' }
	}

	handleUsernameInput = ({ target }) => this.setState({ username: target.value });

	handlePasswordInput = ({ target }) => this.setState({ password: target.value });

	handleLoginSubmit = (event) => {
		this.setState({ username: '', password: '' })
		alert("username: " + this.state.username +
			"\npassword: " + this.state.password)
	}

	render() {
		let { classes } = this.props;
		let { username, password } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.headingContainer}>
					<Typography
						variant="display2"
						color="primary"
					>
						Never Stay Hungry
					</Typography>
				</div>
		        <Paper className={classes.loginPaper}>
		        	<div className={classes.loginFieldsContainer}>
			            <Input
			              className={classes.loginFields}
			              type={"text"}
			              placeholder={"username"}
			              value={username}
			              onChange={this.handleUsernameInput}
			            />
			            <Input
			              className={classes.loginFields}
			              type={"password"}
			              placeholder={"password"}
			              value={password}
			              onChange={this.handlePasswordInput}
			            />
		        	</div>
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
	},
	loginButtonContainer: {
		marginTop: 40,
	},
};

export default withStyles(styles)(LogInPage);
