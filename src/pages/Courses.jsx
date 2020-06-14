import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getCourses,
	getCoursesPending,
	getCoursesError,
} from "../store/reducers/selectors/CoursesSelectors";

import { bindActionCreators } from "redux";

import {fetchCourses} from "../store/reducers/actions/CoursesActions";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import Card from "../components/Card";
import TabBar from "../components/Tabs";
import { Spinner } from "../components/Spinner";
class Courses extends Component {
	
	static defaultProps = {
		courses: [
			{
				id: "1",
				title: "Hier worden al jouw cursussen weergegeven. ",
				tag: "NEW",
				shortDescription:
					"Wanneer jouw recruiter een cursus voor jou heeft opengesteld kun je direct beginnen.",
				label: "Cursus starten",
			}
		]
	}


	state = {
		title: "Mijn Cursussen",
		courseTitle: "Titel",
		tag: "tag",
		content: "short description",
		courses:[]
	};
	componentDidMount() {
		
		const { fetchCourses } = this.props;
		fetchCourses();
		console.log(fetchCourses)
		
	}
	componentDidUpdate() {
		console.log("hallo" + this.props.courses);
		const { pending } = this.props;
		if (pending === false) return false;
		// more tests
		return true;
	}
	render() {
		const { courses, pending, error } = this.props;
		if (pending) return <Spinner />;
		const { title } = this.state;
		const coursesNew = courses.filter((course) => course.tag === "NEW");
		const coursesInProgress = courses.filter(
			(course) => course.tag === "IN PROGRESS"
		);
		const coursesFinished = courses.filter(
			(course) => course.tag === "FINISHED"
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
								title: "ALL",
								render: () => (
									<>
										{courses.map((course, i) => (
											<Card
												key={i}
												title={course.title}
												tag={course.tag}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
												to={`course/:id`}
											/>
										))}
									</>
								),
							},
							{
								title: "NEW",
								render: () => (
									<>
										{coursesNew.map((course, i) => (
											<Card
												key={i}
												title={course.title}
												tag={course.tag}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
											/>
										))}
									</>
								),
							},
							{
								title: "IN PROGRESS",
								render: () => (
									<>
										{coursesInProgress.map((course, i) => (
											<Card
												key={i}
												title={course.title}
												tag={course.tag}
												content={
													course.shortDescription
												}
												label={course.label}
												id={course.id}
											/>
										))}
									</>
								),
							},
							{
								title: "FINISHED",
								render: () => (
									<>
										{coursesFinished.map((course, i) => (
											<Card
												key={i}
												title={course.title}
												tag={course.tag}
												content={
													course.shortDescription
												}
												label={course.label}
											/>
										))}
									</>
								),
							},
						]}
					/>
				</Content>
				{/* <Switch>
					<Route path={`${match.path}/:id`}>
						<Course />
					</Route>
					<Route path={match.path}>
						<h3>Please select a topic.</h3>
					</Route>
				</Switch> */}
			</>
		);
	}
}


const mapStateToProps = (state) => ({
	error: getCoursesError(state),
	courses: getCourses(state),
	pending: getCoursesPending(state),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchCourses: fetchCourses,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
