import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import { AgendaButton } from '../components/Button';
import { Task } from '../components/Tasks';
import { FiCalendar } from 'react-icons/fi';
import { TiArrowSync } from 'react-icons/ti';
import { MdKeyboardArrowDown } from 'react-icons/md';

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
					<div className='header-toolbar'>
						<div className='left'>
							<h2>Mei</h2>
							<MdKeyboardArrowDown className='arrowdown-icon' />
						</div>

						<div className='right'>
							<FiCalendar className='agenda-icon' />
							<TiArrowSync className='change-icon' />
						</div>
					</div>
				</Header>
				<Content>
					<Task>13 pagina&apos;s lezen</Task>
					{/* 'lezen' --> 'gelezen' */}
					{/* <AgendaButton label='Examen in 10 dagen' to='#idRouteToExamDay' /> */}
					{/* dayToExamen */}
				</Content>
			</>
		);
	}
}
export default Agenda;
