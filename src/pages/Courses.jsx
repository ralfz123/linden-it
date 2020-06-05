import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import Card from '../components/Card';

class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Mijn cursussen",
		};
	}

	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content>
					<p>Segmented Controll</p>
					<Card />
					<Card />
				</Content>
			</>
		);
	}
}
export default Courses
