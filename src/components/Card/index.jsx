import React, { Component } from "react";
import StyledCard from './StyledCard';
import Button from '../Button';
import Tags from '../Tags';

class Card extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      title: "Course",
      password: ""
    };
}
	render() {
		return (
			<StyledCard>
				<CardHeader>
					
				</CardHeader>
				<CardContent>
					<p>Course Page Content</p>
				</CardContent>
				<CardFooter></CardFooter>
			</StyledCard>
		);
	}
}
export default Card;


const CardHeader = () => {
	return (
		<div className="card-header">
			<Tags>progress</Tags>
			<h2>Course Name</h2>
		</div>
	);
}
const CardContent = () => {
	return (
		<div className="card-content">
			<p><b>Short Intro</b></p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				dignissim tempor quam, vel vestibulum dolor tempor a.{" "}
			</p>
		</div>
	);
};

const CardFooter = (props) => {
	return (
		<div className='card-footer'>
			<Button>Cursus Starten</Button>
		</div>
	);
};

