import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";

class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Courses",
		};
	}

	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content>
					<p>Course Page Content</p>
				</Content>
			</>
		);
	}
}
export default Courses