import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Title from "../components/Title";


import TabBar from "../components/Tabs";



class Course extends Component {
	state = {
		title: "Course Titel",
		courseTitle: "Titel",
		tag: "tag",
		content: "short description",
	};

	render() {
			
		console.log("hallooo")
		const { title } = this.state;
		
		
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
									<div>fhuiw</div>
									</>
								),
							},
							{
								title: "NEW",
								render: () => (
									<>
										<div>doei</div>
									</>
								),
							},
							{
								title: "IN PROGRESS",
								render: () => (
									<>
										<div>hallo</div>
									
									</>
								),
							},
						]}
					/>
				</Content>
			</>
		);
	}
}


export default Course;