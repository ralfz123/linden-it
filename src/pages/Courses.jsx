import React, { Component } from "react";

import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import PropTypes from "prop-types";
import Card from "../components/Card";
import TabBar from "../components/Tabs";

class Courses extends Component {
	static defaultProps = {
		courses: [
			{
				title: "Hier worden al jouw cursussen weergegeven. ",
				tag: "NEW",
				shortDescription:
					"Wanneer jouw recruiter een cursus voor jou heeft opengesteld kun je direct beginnen.",
				label: "Cursus starten",
			},
			{
				title: "MD-100",
				tag: "IN PROGRESS",
				shortDescription:
					"This exam measures your ability to accomplish the following technical tasks: deploy Windows; manage devices and data; configure connectivity; and maintain Windows. If you passed Exam 70-698 before it expired on March 31, 2019, you only need to take MD-101 to earn the Modern Desktop certification. ",
				label: "Open Cursus",
			},
		],
	};

	state = {
		title: "Mijn Cursussen",
		courseTitle: "Titel",
		tag: "tag",
		content: "short description",
	};

	render() {
		const { title } = this.state;
		const { courses } = this.props;

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
											/>
										))}
									</>
								),
							},
							{
								title: "NEW",
								render: () => (
									<p>Hier komen de nieuwe courses</p>
								),
							},
							{
								title: "IN PROGRESS",
								render: () => (
									<p>Hier komen de in progress courses</p>
								),
							},
							{
								title: "FINISHED",
								render: () => (
									<p>Hier komen de afgeronde courses</p>
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
};

export default Courses;
