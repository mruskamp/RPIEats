import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginPage from './containers/LoginPage';

import { getUsername, getUserType } from './data/session/selectors';

function AuthenticateComponent (WrappedComponent) {

	class InnerWrapper extends React.Component {
		render() {
			// ensuring we have a userType
			if (this.props.username !== "") {	
				return (
					<Fragment>
						<WrappedComponent {...this.props} /> {/*injecting usernme & userType to children*/}
					</Fragment>
					)
			}
			return (<LoginPage />)
		}
	}

	function mapStateToProps(state) {
		return {
			username: getUsername(state),
			userType: getUserType(state),
		}
	}


	return compose(
		connect(mapStateToProps)
	)(InnerWrapper)
	
}

export default AuthenticateComponent;