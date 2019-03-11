import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './containers/LoginPage';
import LandingPage from './components/LandingPage';
import RestaurantsPage from './containers/RestaurantsPage';
import MenuPage from './containers/MenuPage';
import CartPage from './containers/CartPage';
import { Header, Footer } from './components/layouts';
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
				<Router>
					<Fragment>
						<Header/>
							<div style={{ height: theme.spacing.contentHeight }}>
								<Switch>
									<Route path="/login" component={() => <LoginPage/>} />
									<Route path={`/restaurant/:restaurantName`} component={() => <MenuPage />} />
									<Route path="/restaurants" component={() => <RestaurantsPage/>} />
									<Route path="/cart" component={() => <CartPage />} />
									<Route exact path="/" component={() => <LandingPage/>} />
								</Switch>
							</div>
						<Footer/>
					</Fragment>
				</Router>
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
