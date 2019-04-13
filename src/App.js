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
import { fetchRestaurants } from './containers/RestaurantsPage/actions';
import { fetchOrders } from './containers/OrdersPage/actions';
import { getRestaurantNames } from './containers/RestaurantsPage/selectors';
import { getOrderIds } from './containers/OrdersPage/selectors';

import mainTheme from './theme';


const AuthenticMenuPage = AuthenticateComponent(MenuPage);
const AuthenticCartPage = AuthenticateComponent(CartPage);
const AuthenticStatusPage = AuthenticateComponent(StatusPage);
const AuthenticProfilePage = AuthenticateComponent(ProfilePage);
const AuthenticOrdersPage = AuthenticateComponent(OrdersPage);



class App extends Component {

	componentDidMount = () => {
		this.props.fetchRestaurants();
		if (this.props.userType !== ""){
			if (this.props.userType === "customer")
				this.props.fetchOrders(this.props.username);
			else
				this.props.fetchOrders()
		}
	}

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
		restaurantNames: getRestaurantNames(state),
		orderIds: getOrderIds(state),
		userType: state.session.userType,
		username: state.session.username,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchRestaurants: () => dispatch(fetchRestaurants()),
		fetchOrders: () => dispatch(fetchOrders()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
