import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import Card from '../components/Card';

class Courses extends Component {
	state = {
		title: 'Mijn Cursussen'
	}

	render() {
		const { title } = this.state
		return (
			<>
				<Header>
					<Title title={title} />
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
