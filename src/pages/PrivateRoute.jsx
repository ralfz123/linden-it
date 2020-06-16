import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserAuthState} from '../store/reducers/selectors/LoginSelectors';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			render={props => {
				const { isAuthenticated } = rest.store;
				const { computedMatch } = rest;

				if (isAuthenticated) {
					return (
						<Component
							key={computedMatch.params.id}
							{...computedMatch}
							{...props}
            
						/>
					);
				}
				return <Redirect to="/login" />;
			}}
		/>
	);
}

function mapStateToProps(state) {
	return {
		store: {
			isAuthenticated: getUserAuthState(state),
		},
	};
}

export default connect(mapStateToProps, null)(PrivateRoute);
