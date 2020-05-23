import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Tabs from './components/Tabs/Tabs';
import Home from './pages/Home';
import Courses from "./pages/Courses";

const App = () => {
  return (
		<Router>
			<Tabs />
			<Switch>
				<Route path="/courses" component={Courses} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
  );
}
  

export default App;
