import React, { Component } from "react";

import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import PropTypes from "prop-types";
import Card from '../components/Card';
import {SegmentedControl} from "segmented-control-react";

const segments = [
	{ name: "ALL" },
	{ name: "NEW" },
	{ name: "IN PROGRESS" },
	{ name: "FINISHED" },
];

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
		segments: segments,
		selected: 0,
	};
	
	render() {
		console.log(this.state);
		const { title } = this.state;
		const { courses } = this.props;
		
		return (
			<>
				<Header>
					<Title title={title} />
				</Header>
				<Content>
					<SegmentedControl
						segments={this.state.segments}
						selected={this.state.selected}
						variant='segment'
						// onChangeSegment={handleChange}
					/>
					{courses.map((course, i) => (
						<Card
							key={i}
							title={course.title}
							tag={course.tag}
							content={course.shortDescription}
							label={course.label}
						></Card>
					))}
				</Content>
			</>
		);
	}
}


Courses.propTypes = {
	courses: PropTypes.array,
}

export default Courses
