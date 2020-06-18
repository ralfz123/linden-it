import React from 'react';
import PropTypes from 'prop-types';
import StyledAccordion, {StyledAccordionWrapper} from './StyledAccordion';
import {ChapterTags} from '../Tags';
import { SecondaryButton } from '../Button';

export default function AccordionItem({tag, content, title, label, id, path, onClick, contentTitle, isActive }) {
	return (
		<StyledAccordion active={isActive}>
			
			<AccordionHeader title={title} tag={tag}>
				{tag}
			</AccordionHeader>
			
			<AccordionContent contentTitle={contentTitle} content={content}>{content}</AccordionContent>
			{label &&
				<AccordionFooter title={title} id={id}>
					<SecondaryButton label={label} key={id} to={`${path}/${id}`}>
						{label}
					</SecondaryButton>
				</AccordionFooter>}
		</StyledAccordion>
	);
}

// Proptypes Accordion
AccordionItem.propTypes = {
	content: PropTypes.any,
	contentTitle: PropTypes.any,
	id: PropTypes.any,
	label: PropTypes.any,
	onClick: PropTypes.func,
	path: PropTypes.any,
	tag: PropTypes.any,
	title: PropTypes.any
};

export const AccordionWrapper = ({children}) => {
	return <StyledAccordionWrapper>{children}</StyledAccordionWrapper>;
};

// Proptypes BaseAccordion
AccordionWrapper.propTypes = {
	children: PropTypes.any,
};


export const AccordionHeader = ({tag ,title}) => {
	return (
		<div className='accordion-header'>
			{tag && <ChapterTags>{tag}</ChapterTags>}

			<p>{'H1: CONFIGURE VPN'}</p>
		</div>
	);
};

// Proptypes AccordionHeader
AccordionHeader.propTypes = {
	tag: PropTypes.string,
	title: PropTypes.string
};


export const AccordionContent = ({content, contentTitle}) => {
	return (
		<div className="accordion-content">
			<p><b>{contentTitle}</b></p>
			<p>
				{content}
			</p>
		</div>
	);
};

// Proptypes AccordionContent
AccordionContent.propTypes = {
	content: PropTypes.string,
	contentTitle: PropTypes.any,
};


export const AccordionFooter = ({children}) => {
	return (
		<div className='accordion-footer'>
			{children}
		</div>
	);
};


AccordionFooter.propTypes = {
	children: PropTypes.any
};