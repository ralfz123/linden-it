import React from 'react';
import PropTypes from 'prop-types';
import StyledCard, {CardWrapper} from './StyledCard';
import {CourseTags} from '../Tags';
import { StyledLink } from '../Link';


export default function Card({tag, content, title, label, id, path, onClick, contentTitle, startDate, endDate, badge }) {
	return (
		<CardWrapper>
			<StyledCard>
				{/* if thhere is a titile render the header  */}
				{title && (
					<CardHeader title={title} tag={tag} startDate={startDate} />
				)}
				{/* if thhere is content render card content  */}
				{content && (
					<CardContent badge={badge}>
						{content && (
							<CardContentItem
								badge={badge}
								contentTitle={contentTitle}
								content={content}
							>
								{content}
							</CardContentItem>
						)}
						{/* if there is an end date render it  */}
						{endDate && (
							<CardContentItem
								contentTitle={'Datum behaald'}
								content={endDate}
							>
								{endDate}
							</CardContentItem>
						)}
					</CardContent>
				)}
				{/* the label is the text of the button.  */}
				{label && (
					<CardFooter title={title} id={id}>
						<StyledLink label={label} key={id} to={`${path}/${id}`}>
							{label}
						</StyledLink>
					</CardFooter>
				)}
			</StyledCard>
		</CardWrapper>
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


export const CardHeader = ({tag,title, startDate}) => {
	return (
		<div className='card-header'>
		{/*  if there is a tagg render the tag otherwise dont */}
			{tag && <CourseTags>{tag}</CourseTags>}
			
			<div className='card-header-content'>
				<h2>{title}</h2>
				{startDate && (
					<div>
						<p>
							<b>Startdatum:</b> <br></br>
							{startDate}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

// Proptypes CardHeader
CardHeader.propTypes = {
	tag: PropTypes.string,
	title: PropTypes.string
};

// parent content component
export const CardContent = ({children, badge}) => {
	return (
		<div className='card-content'>
			{children}
		</div>
	);
};
// child content component. 
export const CardContentItem = ({ content, contentTitle, badge }) => {
	return (
		<div className='card-content-item'>
			{badge && <img src={badge} alt='Course Badge'></img>}
			<p>
				<b>{contentTitle}</b>
			</p>
			<p>{content}</p>
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