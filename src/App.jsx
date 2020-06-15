import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './pages/PrivateRoute';
import GlobalStyle from './GlobalStyle';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Agenda from './pages/Agenda';
import Settings from './pages/Settings';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

const App = ({ history, context }) => {
	return (
		<ConnectedRouter history={history} context={context}>
			<Switch>
				<Route name='login' path='/login' component={Login} />

				<Route
					name='reset-password'
					path='/reset-password'
					component={ResetPassword}
				/>

				<PrivateRoute name='home' exact path='/' component={Home} />

				<PrivateRoute
					name='courses'
					exact
					path='/courses'
					component={Courses}
				/>
				<PrivateRoute
					name='courses'
					exact
					path='/courses/:id'
					component={Course}
				/>
				<PrivateRoute name='agenda' path='/agenda' component={Agenda} />

				<PrivateRoute
					name='settings'
					path='/settings'
					component={Settings}
				/>
			</Switch>

			<Footer>
				<Nav />
			</Footer>
			<GlobalStyle />
		</ConnectedRouter>
	);
};
App.propTypes = {
	history: PropTypes.object,
};
export default App;
