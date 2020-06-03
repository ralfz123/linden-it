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

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route name="courses" path="/courses" component={Courses} courses={courseList} />
				<Route name="agenda" path="/agenda" component={Agenda} />
				<Route name="settings" path="/settings" component={Settings} />
				<Route name="home" path="/" component={Home} />
			</Switch>
			<Footer>
				<Tabs />
			</Footer>
		</Router>
	);
};

export default App;
