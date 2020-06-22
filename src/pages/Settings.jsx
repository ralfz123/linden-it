import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import {PrimaryButton} from '../components/Button';
import {SecondaryButton} from '../components/Button';

class Settings extends Component {
	state = {
		title: 'Profiel',
	};
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