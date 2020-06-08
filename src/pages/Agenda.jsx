import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import {BaseButton} from "../components/Button";

class Agenda extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Mijn agenda",
		}
	}
	
	
	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title}/>
				</Header>
				<Content>
					<p>Agenda Content</p>
					<BaseButton>Button</BaseButton>
				</Content>
			</>
		);
	}
}
export default Agenda   