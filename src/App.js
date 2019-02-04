import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
	    <Router>
	      	<div>
	        	<Switch>
		        	<Route path="/login" component={LoginPage} />
		        	<Route exact path="/" component={LandingPage} />
	        	</Switch>
	        </div>
	    </Router>
    );
  }
}

export default App;
