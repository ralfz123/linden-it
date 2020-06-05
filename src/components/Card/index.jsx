import React from "react";
import StyledCard from './StyledCard';
import Button from '../Button';
import Tags from '../Tags';

export default function Card({tag, content}) {
	return (
		<BaseCard>
			{tag &&
				<CardHeader>
					{tag}
				</CardHeader>
			}
			{content &&
				<CardContent>
					{content}
				</CardContent> }
				
				<CardFooter></CardFooter>
			</BaseCard>
	)
}

export const BaseCard = ({children}) => {
	return (
		<StyledCard>
			{children}
		</StyledCard>
	)
}


export const CardHeader = () => {
	return (
		<div className="card-header">
			<Tags>progress</Tags>
			<h2>Course Name</h2>
		</div>
	);
}
export const CardContent = () => {
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

export const CardFooter = (props) => {
	return (
		<div className='card-footer'>
			<Button>Cursus Starten</Button>
		</div>
	);
};

