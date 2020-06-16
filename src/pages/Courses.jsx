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
import Title from '../components/Title';
import Card from '../components/Card';
import TabBar from '../components/Tabs';
import { Spinner } from '../components/Spinner';
class Courses extends Component {
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
		title: 'Mijn Cursussen',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		courses: [],
	};
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
		const { courses, pending, url, selectCourse } = this.props;
		if (pending) return <Spinner />;
		const { title } = this.state;
		// const course = courses.map((course) => (course.id));
		const coursesNew = courses.filter((course) => course.tag === 'NEW');
		const coursesInProgress = courses.filter(
			(course) => course.tag === 'IN PROGRESS'
		);
		const coursesFinished = courses.filter(
			(course) => course.tag === 'FINISHED'
		);
		return (
			<>
				<Header>
					<Title title={title} />
				</Header>
				<Content>
					<TabBar
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
												contentTitle={'Korte Introductie'}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
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
												onClick={() =>
													selectCourse(course)
												}
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={'Korte Introductie'}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
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
												onClick={() =>
													selectCourse(course)
												}
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={'Korte Introductie'}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
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
												onClick={() =>
													selectCourse(course)
												}
												key={course.id}
												title={course.title}
												tag={course.tag}
												contentTitle={'Korte Introductie'}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
												path={url}
											/>
										))}
									</>
								),
							},
						]}
					/>

					{/* <Route
							name='course'
							path={`${url}/:id`}

							component={Course}
						/> */}
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
		error: getCoursesError(state),
		courses: state.courses.courses,
		pending: getCoursesPending(state),
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
