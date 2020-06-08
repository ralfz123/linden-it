import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";
import {BaseButton} from "../components/Button";

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Profiel",
		}
	}
	
	
	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title}/>
				</Header>
				<Content>
					<p>Settings Content</p>
					<BaseButton>Button</BaseButton>
				</Content>
			</>
		);
	}
}
export default Settings     