import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';
import { FiHome, FiBookmark, FiBarChart2, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Colors of Courses
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

// Colors of Chapters 
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

// Icons of Chapters
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

// Tags of Chapters
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

// CourseTag styling
const CourseTag = styled(motion.div)`
	position: absolute;
	padding: 4px 10px;
	background-color: ${({ children }) => handleColorCourses(children)};
	color: ${colors.grayDark};
	border-radius: 5px;
	left: -20px;
	font-size: 12px;
`;

// ChapterTagWrapper styling
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

// ChapterIcon styling
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

// ChapterTag styling
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

// Tag Component styling
const Tag = styled.div`
	padding: 4px 10px;
	background-color: ${colors.primary};
	color: ${colors.light};
	border-radius: 5px;
	font-size: 12px;
`;

// Export CourseTags
export const CourseTags = ({ children }) => {
	return <CourseTag>{children}</CourseTag>;
};

// Export CourseTags
export const ChapterTags = ({ children }) => {
	return (
		<ChapterTagWrapper>
			{handleIconChapters(children)}
			{handleTagChapters(children)}
		</ChapterTagWrapper>
	);
};

// PropTypes ChapterTags
ChapterTags.propTypes = {
	children: PropTypes.any
};

// PropTypes CourseTags
CourseTags.propTypes = {
	children: PropTypes.string
};

// Export Tags component
export const Tags = ({ children }) => {
	return <Tag>{children}</Tag>;
};

// PropTypes Tags
Tags.propTypes = {
	children: PropTypes.string
};

export default Tags;
