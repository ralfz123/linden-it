import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import { AgendaButton } from '../components/Button';
import {Task} from '../components/Tasks';
class Agenda extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Mijn agenda',
		};
	}

	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content>
					<Task>13 pagina's lezen</Task>
					<Task>13 pagina's lezen</Task>
					<Task>13 pagina's lezen</Task>
					<Task>13 pagina's lezen</Task>
					<AgendaButton label='Examen in 10 dagen' to='routeToExamDay' />
					{/* dayToExamen */}
				</Content>
			</>
		);
	}
}
export default Agenda;
