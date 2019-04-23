import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthenticateComponent from './AuthenticateComponent';

import LandingPage from './components/LandingPage';
import LoginPage from './containers/LoginPage';
import MenuPage from './containers/MenuPage';
import CartPage from './containers/CartPage';
import RestaurantsPage from './containers/RestaurantsPage';
import OrdersPage from './containers/OrdersPage';
import StatusPage from './containers/StatusPage';
import ProfilePage from './containers/ProfilePage';
import { Header, Footer } from './components/layouts';

import { getUsername, getUserType } from './data/session/selectors';

import mainTheme from './theme';

// Checking to ensure the user is logged in before seeing this page
const AuthenticMenuPage = AuthenticateComponent(MenuPage);
const AuthenticCartPage = AuthenticateComponent(CartPage);
const AuthenticStatusPage = AuthenticateComponent(StatusPage);
const AuthenticProfilePage = AuthenticateComponent(ProfilePage);
const AuthenticOrdersPage = AuthenticateComponent(OrdersPage);



class App extends Component {

  render() {
    return (
			<div style={{ height: '100vh' }} >
				<Router>
					<Fragment>
						<Header userType={this.props.userType} />
							<div style={{ 
								minHeight: mainTheme.spacing.contentHeight,
								maxHeight: mainTheme.spacing.contentHeight,
								overflow: 'auto', 
							}}>
								<Switch>
									<Route path="/login" component={() => <LoginPage />} />
									<Route path={`/restaurant/:restaurantName`} component={() => <AuthenticMenuPage  />} />
									<Route path="/restaurants" component={() => <RestaurantsPage />} />
									<Route path="/cart" component={() => <AuthenticCartPage  />} />
									<Route path="/orders" component={() => <AuthenticOrdersPage />} />
									<Route path={`/order/status/:orderId`} component={() => <AuthenticStatusPage />} />
									<Route path="/profile" component={() => <AuthenticProfilePage />} />
									<Route exact path="/" component={() => <LandingPage />} />
								</Switch>
							</div>
						<Footer userType={this.props.userType} />
					</Fragment>
				</Router>
			</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		userType: getUserType(state),
		username: getUsername(state),
	};
}

export default connect(mapStateToProps)(App);
