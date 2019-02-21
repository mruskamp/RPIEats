import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './containers/LoginPage';
import LandingPage from './components/LandingPage';
import RestaurantsPage from './containers/RestaurantsPage';
import { Header, Footer } from './components/layouts'
import { fetchRestaurants } from './containers/RestaurantsPage/actions';

class App extends Component {

	componentDidMount = () => {
		this.props.fetchRestaurants();
	}

  render() {
    return (
			<Fragment>
				<Header/>
				<Router>
						<div>
							<Switch>
								<Route path="/login" component={() => <LoginPage/>} />
								<Route path="/restaurants" component={() => <RestaurantsPage/>} />
								<Route exact path="/" component={() => <LandingPage/>} />
							</Switch>
						</div>
				</Router>
				<Footer/>
			</Fragment>
    );
  }
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchRestaurants: () => dispatch(fetchRestaurants()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
