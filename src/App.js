import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Tabs from "./components/Tabs/Tabs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import courseList from "./courses-data.json";

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route name="courses"
					path="/courses"
					component={Courses}
					courses={courseList}
				/>
				<Route name="Home" path="/" component={Home} />
			</Switch>
			<Footer>
				<Tabs />
			</Footer>
		</Router>
	);
};

export default App;
