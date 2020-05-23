import React from 'react';

import {Link} from 'react-router-dom';

const Tabs = () => {
    return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/courses">Courses</Link>
		</nav>
	);
}

export default Tabs;

