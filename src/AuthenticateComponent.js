import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginPage from './containers/LoginPage';

function AuthenticateComponent (WrappedComponent) {

	class InnerWrapper extends React.Component {
		render() {
			// ensuring we have a userType
			if (this.props.userType !== "" || 1===1) {	
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
			userType: state.session.userType,
		}
	}


	return compose(
		connect(mapStateToProps)
	)(InnerWrapper)
	
}

export default AuthenticateComponent;