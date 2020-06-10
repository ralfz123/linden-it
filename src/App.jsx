import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import {courses} from "./data.js";
import Agenda from "./pages/Agenda";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

const App = (props) => {
	console.log(props)
	return (
		<HashRouter>
			<Switch>

				<Route 
				name='login' 
				path='/login' 
				component={Login}
				/>

				<Route 
				name='reset-password' 
				path='/reset-password' 
				component={ResetPassword}
				/>
				
				<Route 
				name='home' 
				exact path='/' 
				component={Home}
				/>


				<Route
					name='courses'
					path='/courses'
					component={Courses}
					courses={courses}
				/>

				<Route name='agenda' path='/agenda' component={Agenda} />

				<Route name='settings' path='/settings' component={Settings} />
			</Switch>

			<Footer>
				<Nav />
			</Footer>
			<GlobalStyle />
		</HashRouter>
	);
};

export default App;
