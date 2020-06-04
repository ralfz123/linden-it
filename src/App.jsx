import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Tabs from "./components/Tabs/Tabs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import courseList from "./courses-data.json";
import Agenda from "./pages/Agenda";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

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
				courses={courseList}
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
				<Tabs />
			</Footer>
		</Router>
	);
};

export default App;
