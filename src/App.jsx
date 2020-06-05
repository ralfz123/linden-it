import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import {courses} from "./data.js";
import Agenda from "./pages/Agenda";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route 
				name='login' 
				path='/login' 
				component={Login}
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

				<Route 
				name='agenda' 
				path='/agenda' 
				component={Agenda} 
				/>

				<Route 
				name='settings' 
				path='/settings' 
				component={Settings} 
				/>
			</Switch>
			
			<Footer>
				<Nav />
			</Footer>
		</Router>
	);
};

export default App;
