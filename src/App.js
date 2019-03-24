import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

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


class App extends Component {

	componentDidMount = () => {
		this.props.fetchRestaurants();
		this.props.fetchOrders();
	}

  render() {
    return (
			<div style={{ height: '100vh' }} >
				<Router>
					<Fragment>
						<Header/>
							<div style={{ 
								minHeight: mainTheme.spacing.contentHeight,
								maxHeight: mainTheme.spacing.contentHeight,
								overflow: 'auto', 
							}}>
								<Switch>
									<Route path="/login" component={() => <LoginPage/>} />
									<Route path={`/restaurant/:restaurantName`} component={() => <MenuPage />} />
									<Route path="/restaurants" component={() => <RestaurantsPage/>} />
									<Route path="/cart" component={() => <CartPage />} />
									<Route path="/orders" component={() => <OrdersPage/>} />
									<Route path={`/order/status/:orderId`} component={() => <StatusPage/>} />
									<Route path="/profile" component={() => <ProfilePage/>} />
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
		orderIds: getOrderIds(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchRestaurants: () => dispatch(fetchRestaurants()),
		fetchOrders: () => dispatch(fetchOrders()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
