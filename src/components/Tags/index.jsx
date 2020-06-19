import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';
import { FiHome, FiBookmark, FiBarChart2, FiCheck } from 'react-icons/fi';

const handleColorCourses = (children) => {
	switch (children) {
	case 'NEW':
		return colors.tagNew;
	case 'IN PROGRESS':
		return colors.tagProgress;
	case 'FINISHED':
		return colors.tagFinished;
	default:
		return colors.primary;
	}
};
const handleColorChapters = (children) => {
	switch (children) {
	case 'NEW':
		return colors.tagNew;
	case 'IN PROGRESS':
		return colors.tagProgress;
	case 'DONE':
		return colors.tagFinished;
	default:
		return colors.primary;
	}
};
const handleIconChapters = (children) => {
	switch (children) {
		case 'IN PROGRESS':
			return <FiBarChart2/>;
		case 'DONE':
			return <FiCheck />;
		default:
			return <FiBookmark />;
	}
};
const CourseTag = styled.div`
	position: absolute;
	padding: 4px 10px;
	background-color: ${({ children }) => handleColorCourses(children)};
	color: ${colors.grayDark};
	border-radius: 5px;
	left: -20px;
	font-size: 12px;
`;
const ChapterTag = styled.div`
	display: flex;
	position: relative;
	color: ${colors.light};
	left: 0px;
	.icon {
		position:absolute;
		background-color: ${({ children }) => handleColorChapters(children)};
		border-radius:100%;
		height: 22px;
		width:22px;
		left: -30px;
		margin-right:5px;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.tag {
		position:relative;
		background-color: ${({ children }) => handleColorChapters(children)};
		color: ${colors.light};
		border-radius: 5px;
		padding: 4px 10px;
		font-size: 12px;
	}
`;
const Tag = styled.div`
	padding: 4px 10px;
	background-color: ${colors.primary};
	color: ${colors.light};
	border-radius: 5px;
	font-size: 12px;
	
`;

export const CourseTags = ({ children }) => {
	return <CourseTag>{children}</CourseTag>;
};
export const ChapterTags = ({ children }) => {
	return (
		<ChapterTag>
			<div className='icon'>{handleIconChapters(children)}</div>
			<div className='tag'>{children}</div>
		</ChapterTag>
	);
};

CourseTags.propTypes = {
	children: PropTypes.string
};

export const Tags = ({ children }) => {
	return <Tag>{children}</Tag>;
};

Tags.propTypes = {
	children: PropTypes.string
};

export default Tags;
