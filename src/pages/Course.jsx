import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCourses } from '../store/reducers/actions/CoursesActions';
import {
	getCourses,
	getCoursesPending,
	getCoursesError,
} from '../store/reducers/selectors/CoursesSelectors';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import TabBar from '../components/Tabs';
import { Spinner } from '../components/Spinner';
class Course extends Component {
	state = {
		title: 'Cursus Detail',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		courses: [],
		course: [],
	};
	componentDidMount() {
		// if (this.props.course.id != nextProps.course.id) {
		// 	this.setState({course: nextProps.course});
		// }
		// this.setState({saving: false, isEditing: false});
		const { fetchCourses } = this.props;
		fetchCourses();

	}
	componentDidUpdate(prevProps, prevState) {
		const { pending } = this.props;
		if (pending === false) return false;
		// more tests
		return true;
	}
	render() {
		const { courses, params, path, match, pending } = this.props;
		// let id = params.id;
		if (pending) return <Spinner />;
		
		
		
		
		
		const { title } = this.state;
		let course = courses.find(course => course.id == params.id);
		
		console.log(course);
		return (
			<>
				<Header>
					<Title title={title} />
				</Header>
				<Content>
					<TabBar
						tabs={[
							{
								title: 'NOTITIES',
								render: () => (
									<>
										<div>{`${course}`}</div>
									</>
								),
							},
							{
								title: 'LEERSTOF',
								render: () => (
									<>
										<div>doei</div>
									</>
								),
							},
							{
								title: 'FORUM',
								render: () => (
									<>
										<div>hallo</div>
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

Course.propTypes = {
	course: PropTypes.object.isRequired,
};
// function getCourseById(courses, id) {
// 	let course = courses.find((course) => course.id == id);
// 	return Object.assign({}, course);
// }
const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.id;
	return {
		error: getCoursesError(state),
		courses: getCourses(state),
		pending: getCoursesPending(state),
		pathname: state.router.location.pathname,
		// course: state.courses.find(course => course.id === id),
	};
	// const courseId = ownProps.params;

	// return {
	// 	error: getCoursesError(state),
	// 	courses: getCourses(state),
	// 	pending: getCoursesPending(state),
	// let course = { title: '', tag: '', shortDescription: '', label: '', chapters: [], },

	// if (courses.length > 0) {
	// 	course = Object.assign({}, state.courses.find(course => course.id == id)
	// }
	// return {course: course};
};
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchCourses: fetchCourses,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Course);
