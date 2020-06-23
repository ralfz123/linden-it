import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';

class Settings extends Component {
	state = {
		title: 'Instellingen',
	};

	// EMPTY - Fill this page with content
	render() {
		const { title } = this.state;
		return (
			<>
				<Header title={title} />
				<Content>
					<p>Content</p>
				</Content>
			</>
		);
	}
}
export default Settings;
