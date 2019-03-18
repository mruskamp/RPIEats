import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from './components/LandingPage';
import LoginPage from './containers/LoginPage';
import MenuPage from './containers/MenuPage';
import RestaurantsPage from './containers/RestaurantsPage';
import OrdersPage from './containers/OrdersPage';
import StatusPage from './containers/StatusPage';
import { Header, Footer } from './components/layouts'
import { fetchRestaurants } from './containers/RestaurantsPage/actions';
import { getRestaurantNames } from './containers/RestaurantsPage/selectors';

import theme from './theme';

class App extends Component {

	componentDidMount = () => {
		this.props.fetchRestaurants();
	}

  render() {
    return (
			<div style={{ height: '100vh' }} >
				<Header/>
				<Router>
						<div style={{ height: theme.spacing.contentHeight }}>
							<Switch>
								<Route path="/login" component={() => <LoginPage/>} />
								<Route path={`/restaurant/:restaurantName`} component={() => <MenuPage />} />
								<Route path="/restaurants" component={() => <RestaurantsPage/>} />
								<Route path="/orders" component={() => <OrdersPage/>} />
								<Route path="/order/status" component={() => <StatusPage/>} />
								<Route exact path="/" component={() => <LandingPage/>} />
							</Switch>
						</div>
				</Router>
				<Footer/>
			</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		restaurantNames: getRestaurantNames(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchRestaurants: () => dispatch(fetchRestaurants()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
