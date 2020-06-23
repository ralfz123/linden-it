import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';
import { FiHome, FiBookmark, FiBarChart2, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
	case 'IN PROGRESS' :
		return colors.primary;
	case 'DONE':
		return colors.green;
	case 'NEXT':
		return colors.grayLight;
	default:
		return colors.primary;
	}
};
const handleIconChapters = (children) => {
	switch (children) {
	case 'IN PROGRESS':
		return <ChapterIcon  className='chapter-progress'><FiBarChart2 /></ChapterIcon>;
	case 'DONE':
		return <ChapterIcon  className='chapter-done' ><FiCheck /></ChapterIcon>;
	case 'NEXT':
		return <ChapterIcon  className='chapter-next' ><FiBookmark /></ChapterIcon>;
	default:
		return <ChapterIcon  className='icon' ><FiBookmark /></ChapterIcon>;
	}
};
const handleTagChapters = (children) => {
	switch (children) {
		case 'IN PROGRESS':
			return <ChapterTag className='chapter-progress'>{children}</ChapterTag>;
	case 'DONE':
		return <ChapterTag className='chapter-done'>{children}</ChapterTag>;
	case 'NEXT':
		return <ChapterTag className='chapter-next'>{children}</ChapterTag>;
	default:
		return <ChapterTag>{children}</ChapterTag>;
	}
};
const CourseTag = styled(motion.div)`
	position: absolute;
	padding: 4px 10px;
	background-color: ${({ children }) => handleColorCourses(children)};
	color: ${colors.grayDark};
	border-radius: 5px;
	left: -20px;
	font-size: 12px;
`;
const ChapterTagWrapper = styled.div`
	display: flex;
	position: relative;
	color: ${colors.light};
	left: 0px;
	.icon {
		position: absolute;
		background-color: ${({ children }) => handleColorChapters(children)};
		border-radius: 100%;
		height: 22px;
		width: 22px;
		left: -30px;
		margin-right: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tag {
		position: relative;
		
		
		border-radius: 5px;
		padding: 4px 10px;
		font-size: 12px;
	}
`;
const ChapterIcon = styled.div`
	position: absolute;

	border-radius: 100%;
	height: 22px;
	width: 22px;
	left: -30px;
	margin-right: 5px;
	display: flex;
	justify-content: center;
	align-items: center;

	&.chapter-done {
		background: ${colors.green};
	}
	&.chapter-progress {
		background: ${colors.primary};
	}
	&.chapter-next {
		background: ${colors.grayLight};
		color: ${colors.gray};
	}
`;
const ChapterTag = styled.div`
	position: relative;
	background-color: ${({ children }) => handleColorChapters(children)};
	color: ${colors.light};
	border-radius: 5px;
	padding: 4px 10px;
	font-size: 12px;
	&.chapter-done {
		background: ${colors.green};
	}
	&.chapter-progress {
		background: ${colors.primary};
	}
	&.chapter-next {
		background: ${colors.grayLight};
		color: ${colors.gray};
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
		<ChapterTagWrapper>
			{handleIconChapters(children)}
			{handleTagChapters(children)}
		</ChapterTagWrapper>
	);
};

ChapterTags.propTypes = {
	children: PropTypes.any
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
