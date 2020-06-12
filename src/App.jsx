import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import GlobalStyle from './GlobalStyle';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import { courses } from './data.js';
import Agenda from './pages/Agenda';
import Settings from './pages/Settings';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SettingGoals from './pages/SettingGoals';

const App = (props) => {
	console.log(props);
	return (
		<HashRouter>
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
					path='/courses'
					component={Courses}
					courses={courses}
				/>

				<PrivateRoute name='agenda' path='/agenda' component={Agenda} />

				<PrivateRoute
					name='settings'
					path='/settings'
					component={Settings}
				/>

				<PrivateRoute 
					name='setting-goals'
					path='setting-goals'
					component={SettingGoals}
				/>

			</Switch>

			<Footer>
				<Nav />
			</Footer>
			<GlobalStyle />
		</HashRouter>
	);
};

export default App;
