import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyle from './GlobalStyle'
import Tabs from './components/Tabs/Tabs';
import Home from './pages/Home';
import Courses from "./pages/Courses";
import courseList from "./courses-data.json";

const App = () => {
  return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route
					path="/courses"
					component={Courses}
					courses={courseList}
				/>
				<Route path="/" component={Home} />
			</Switch>
			<Tabs />
		</Router>
  );
}
  

export default App;
