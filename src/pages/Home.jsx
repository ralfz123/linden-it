import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import Button from "../components/Button";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Home",
		}
	}
	
	
	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content>
					<p>Home Page Content</p>
					<Button>Primary</Button>
					<Button secondary>Secondary</Button>
					
				</Content>
			</>
		);
	}
}
export default Home