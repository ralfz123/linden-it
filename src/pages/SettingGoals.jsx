import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import { PrimaryButton } from '../components/Button';
import { SecondaryButton } from '../components/Button';

class SettingGoals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Doelen vaststellen',
		};
	}

	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content>
					<p>Setting Goals Content</p>
					<PrimaryButton label='Dit is een primaire button' />
					<SecondaryButton label='Dit is een secundaire button' />
				</Content>
			</>
		);
	}
}
export default SettingGoals;
