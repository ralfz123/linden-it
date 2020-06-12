import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './StyledCard';
import {PrimaryButton} from '../Button';
import {CourseTags} from '../Tags';

export default function Card({tag, content, title, label}) {
	return (
		<StyledCard>
			{tag &&
				<CardHeader title={title} tag={tag} >
					{tag}
				</CardHeader>
			}
			{content &&
				<CardContent content={content}>
					{content}
				</CardContent> }
				
			<CardFooter>
				{label}
			</CardFooter>
		</StyledCard>
	);
}

// Proptypes Card
Card.propTypes = {
	tag: PropTypes.string,
	content: PropTypes.string,
	title: PropTypes.string,
	label: PropTypes.string
};

export const BaseCard = ({children}) => {
	return (
		<StyledCard>
			{children}
		</StyledCard>
	);
};

// Proptypes BaseCard
BaseCard.propTypes = {
	children: PropTypes.children
};


export const CardHeader = ({tag,title}) => {
	return (
		<div className='card-header'>
			{tag && <CourseTags>{tag}</CourseTags>}

			<h2>{title}</h2>
		</div>
	);
};

// Proptypes CardHeader
CardHeader.propTypes = {
	tag: PropTypes.string,
	title: PropTypes.string
};


export const CardContent = ({content}) => {
	return (
		<div className="card-content">
			<p><b>Korte Introductie</b></p>
			<p>
				{content}
			</p>
		</div>
	);
};

// Proptypes CardContent
CardContent.propTypes = {
	content: PropTypes.string
};


export const CardFooter = ({children}) => {
	return (
		<div className='card-footer'>
			<PrimaryButton label={children} />
		</div>
	);
};

// Proptypes CardFooter - ???
// CardFooter.propTypes = {
// 	children: PropTypes.children
// };