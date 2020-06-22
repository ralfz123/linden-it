import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import { fakeUser } from '../data.json';

class Home extends Component {
	state = {
		title: 'Home',
	};

	render() {
		const user = fakeUser;
		const { title } = this.state;
		return (
			<>
				<Header title={title} />
				<Content>
					<h1>Hoi {user.userName}</h1>
					<p>Content</p>
				</Content>
			</>
		);
	}
}
export default Home;
