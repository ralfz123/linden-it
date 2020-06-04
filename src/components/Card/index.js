import React, { Component } from "react";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Courses",
		};
	}

	render() {
		return (
			<>
				<CardHeader>
					
				</CardHeader>
				<CardContent>
					<p>Course Page Content</p>
				</CardContent>
			</>
		);
	}
}
export default Card;
