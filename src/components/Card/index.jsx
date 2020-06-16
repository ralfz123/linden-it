import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './StyledCard';
import {CourseTags} from '../Tags';
import { StyledLink } from '../Link';

export default function Card({tag, content, title, label, id, path, onClick, contentTitle }) {
	return (
		<StyledCard>
			{tag && (
				<CardHeader title={title} tag={tag}>
					{tag}
				</CardHeader>
			)}
			{content && <CardContent contentTitle={contentTitle} content={content}>{content}</CardContent>}

			{onClick && <CardFooter title={title} id={id}>
				<StyledLink label={label} key={id} to={`${path}/${id}`} onClick={onClick} >
					{label}
				</StyledLink>
			</CardFooter>}
		</StyledCard>
	);
}

// Proptypes Card
Card.propTypes = {
	id: PropTypes.any,
	tag: PropTypes.any,
	content: PropTypes.any,
	title: PropTypes.any,
	label: PropTypes.any,
	path: PropTypes.any,
	onClick: PropTypes.func
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
	// children: PropTypes.string
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


export const CardContent = ({content, contentTitle}) => {
	return (
		<div className="card-content">
			<p><b>{contentTitle}</b></p>
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
			{children}
		</div>
	);
};


CardFooter.propTypes = {
	id: PropTypes.string
};