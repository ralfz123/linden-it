import React, { Component } from "react";
import Title from "../components/Title/Title";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

class Home extends Component {
	render() {
		return (
			<>
				<Header>
					{/* <Title name={`Home`} /> */}
				</Header>
				<Content>
					<p>Course Page Content</p>
				</Content>
			</>
		);
	}
}
export default Home