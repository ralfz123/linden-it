import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
	getCoursesPending,
	getCoursesError,
} from '../store/reducers/selectors/CoursesSelectors';

import { bindActionCreators } from 'redux';

import { fetchCourses } from '../store/reducers/actions/CoursesActions';

import Header from '../components/Header';
import Content from '../components/Content/Content';
import Card from '../components/Card';
import TabBar from '../components/Tabs';


// import Goals from '../components/SettingGoals';

import { SecondaryButton } from '../components/Button';
import { Spinner } from '../components/Spinner';

  
class Courses extends Component {
	// the default props renders when no courser are loaded from the server/redux
	static defaultProps = {
		courses: [
			{
				id: '1',
				title: 'Hier worden al jouw cursussen weergegeven. ',
				tag: 'NEW',
				shortDescription:
					'Wanneer jouw recruiter een cursus voor jou heeft opengesteld kun je direct beginnen.',
				label: 'Cursus starten',
			},
		],
	};

	state = {
		title: 'Mijn cursussen',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		courses: [],
		size: {},
	};
	//when the component did mount, the courses will be fetched and added to the props courses: {}
	componentDidMount() {
		const { fetchCourses } = this.props;
		fetchCourses();
	}
	componentDidUpdate() {
		const { pending } = this.props;
		if (pending === false) return false;
		// more tests
		return true;
	}
	render() {
		const { courses, pending, url } = this.props;
		if (pending) return <Spinner />;
		const { title, size } = this.state;
		
		// Filters the courses with the right tag to do display on each TabBar section. 
		const coursesNew = courses.filter((course) => course.tag === 'NEW');
		const coursesInProgress = courses.filter((course) => course.tag === 'IN PROGRESS');
		const coursesFinished = courses.filter((course) => course.tag === 'FINISHED');

		return (
			<>
				<Header
					title={title}
					getSize={(size) => this.setState({ size })}// get the height of the current header.
				/>
				<Content>
					<TabBar
						setPadding={size}// passes on the size of the header to set a padding top. 
						tabs={[
							{
								title: 'ALL',
								render: () => (
									<>
										{courses.map((course) => (
											<Card
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={
													'Korte Introductie'
												}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
												startDate={course.startDate}
												endDate={course.endDate}
												badge={course.badge}
												path={url}
											/>
										))}
									</>
								),
							},
							{
								title: 'NEW',
								render: () => (
									<>
										{coursesNew.map((course) => (
											<Card
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={
													'Korte Introductie'
												}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
												startDate={course.startDate}
												endDate={course.endDate}
												badge={course.badge}
												path={url}
											/>
										))}
									</>
								),
							},
							{
								title: 'IN PROGRESS',
								render: () => (
									<>
										{coursesInProgress.map((course) => (
											<Card
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={
													'Korte Introductie'
												}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
												startDate={course.startDate}
												endDate={course.endDate}
												badge={course.badge}
												path={url}
											/>
										))}
									</>
								),
							},
							{
								title: 'FINISHED',
								render: () => (
									<>
										{coursesFinished.map((course) => (
											<Card
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={
													'Korte Introductie'
												}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
												startDate={course.startDate}
												endDate={course.endDate}
												badge={course.badge}
												path={url}
											/>
										))}
									</>
								),
							},
						]}
					/>

				</Content>
			
			</>
		);
	}
}
Courses.propTypes = {
	courses: PropTypes.array,
	error: PropTypes.any,
	fetchCourses: PropTypes.func,
	id: PropTypes.string,
	label: PropTypes.string,
	match: PropTypes.any,
	pathname: PropTypes.string,
	pending: PropTypes.bool,
	selectCourse: PropTypes.func,
	shortDescription: PropTypes.string,
	tag: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.any
};

const mapStateToProps = (state) => {
	return {
		error: state.courses.error,
		courses: state.courses.courses,
		pending: state.courses.pending,
	};
};

const mapDispatchToProps = (dispatch) => 
	bindActionCreators(
		{
			fetchCourses: fetchCourses,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
