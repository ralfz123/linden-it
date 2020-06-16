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

			{label && <CardFooter title={title} id={id}>
				<StyledLink label={label} key={id} to={`${path}/${id}`}>
					{label}
				</StyledLink>
			</CardFooter>}
		</StyledCard>
	);
}

// Proptypes Card
Card.propTypes = {
	content: PropTypes.any,
	contentTitle: PropTypes.any,
	id: PropTypes.any,
	label: PropTypes.any,
	onClick: PropTypes.func,
	path: PropTypes.any,
	tag: PropTypes.any,
	title: PropTypes.any
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
	children: PropTypes.any,
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
	content: PropTypes.string,
	contentTitle: PropTypes.any,
};


export const CardFooter = ({children}) => {
	return (
		<div className='card-footer'>
			{children}
		</div>
	);
};


CardFooter.propTypes = {
	children: PropTypes.any
};