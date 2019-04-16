import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginPage from './containers/LoginPage';

// Component to Authenticate Users in the Application

function AuthenticateComponent (WrappedComponent) {

	class InnerWrapper extends React.Component {
		render() {
			// ensuring we have a userType
			if (this.props.username !== "") {	
				return (
					<Fragment>
						<WrappedComponent {...this.props} /> {/*injecting userType to children*/}
					</Fragment>
					)
			}
			return (<LoginPage />)
		}
	}

	function mapStateToProps(state) {
		return {
			username: state.session.username,
		}
	}


	return compose(
		connect(mapStateToProps)
	)(InnerWrapper)
	
}

export default AuthenticateComponent;