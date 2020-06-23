import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import { AgendaButton } from '../components/Button';
import { Task } from '../components/Tasks';
import { FiCalendar } from 'react-icons/fi';
import { TiArrowSync } from 'react-icons/ti';
import { MdKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';


class Agenda extends Component {
	state = {
		title: 'Mijn agenda',
		studyDays: [
			{
				id: 1,
				studyDay: 'maandag',
				studyDayDate: '08-06-2020',
				finished: false
			},
			{
				id: 2,
				studyDay: 'dinsdag',
				studyDayDate: '10-06-2020',
				finished: false
			}	
		],
		size: {},
	};

	// FETCH Code - NOT FINISHED
	// componentDidMount() {
	// 	const { fetchStudyDays } = this.props;
	// 	fetchCourses();
	// }
	// componentDidUpdate() {
	// 	const { pending } = this.props;
	// 	if (pending === false) return false;
	// 	// more tests
	// 	return true;
	// }

	render() {
		// const { studyDays } = this.props;
		const { title } = this.state;
		// const studyDays = studyDays.map((studyDay) => studyDay.id);

		// The sorting of the tasks on the page - NOT FINISHED
		// const studyDaysFinished = studyDays.filter((studyDay) => studyDay.tag === '');
		// const studyDaysToday = studyDays.filter((studyDay) => studyDay.tag === 'IN PROGRESS');
		// const studyDaysTodo= studyDays.filter((studyDay) => studyDay.tag === 'FINISHED');
		return (
			<>
				<Header title={title}>
					<Title title={this.state.title} />
					<div className='header-toolbar agenda-container'>
						<div className='left'>
							<h2>Mei</h2>
							<MdKeyboardArrowDown className='arrowdown-icon' />
						</div>

						<div className='right'>
							<TiArrowSync className='change-icon' />
							<FiCalendar className='agenda-icon' />
						</div>
					</div>
				</Header>

				<Content>
					<Task>13 pagina&apos;s lezen</Task>
				</Content>
			</>
		);
	}
}

// The PropTypes of the agenda page - NOT FINISHED
// Agenda.propTypes = {
// 	studyDays: PropTypes.array,
// 	error: PropTypes.any,
// 	// fetchCourses: PropTypes.func,
// 	id: PropTypes.string,
// 	label: PropTypes.string,
// 	match: PropTypes.any,
// 	// pending: PropTypes.bool,
// 	// selectCourse: PropTypes.func,
// 	title: PropTypes.string,
// };

// const mapStateToProps = (state) => {
// 	return {
// 		error: state.studyDays.error,
// 		studyDays: state.studyDays.studyDays,
// 		// pending: state.courses.pending,
// 	};
// };

// const mapDispatchToProps = (dispatch) =>
// 	bindActionCreators(
// 		{
// 			fetchCourses: fetchCourses,
// 		},
// 		dispatch
// 	);

// export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
export default Agenda;

