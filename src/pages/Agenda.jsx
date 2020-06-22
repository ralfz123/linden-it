import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import { PrimaryButton } from '../components/Button';
import { SecondaryButton } from '../components/Button';

class Agenda extends Component {
	state = {
		title: 'Mijn agenda',
	};

	render() {
		return (
			<>
				<Header
					title={this.state.title}
				/>
				<Content>
					<p>Agenda Content</p>
					<PrimaryButton label='Dit is een primaire button' />
					<SecondaryButton label='Dit is een secundaire button' />
				</Content>
			</>
		);
	}
}
export default Agenda;
