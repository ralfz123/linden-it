import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import Button from "../components/Button";
import Card from "../components/Card"

class Home extends Component {
	state = {
		title: 'Home'
	}
	
	render() {
		const { title } = this.state;
		return (
			<>
				<Header>
					<Title title={title} />
				</Header>
				<Content>
					<p>Home Page Content</p>
					
					<Card />
				</Content>
			</>
		);
	}
}
export default Home