import React from 'react'
import styled from "styled-components";

const handleColorType = (children) => {
  switch (children) {
		case "NEW":
			return "var(--tag-new)";
		case "IN PROGRESS":
			return "var(--tag-progress)";
		case "FINISHED":
			return "var(--tag-finished)";
		default:
			return "var(--color-primary)";
  }
};

const CourseTag = styled.div`
	position: absolute;
	padding: 4px 10px;
	background-color: ${(({children})=>handleColorType(children))};
	color: var(--color-dark);
	border-radius: 5px;
	left: -20px;
	font-size: 12px;
`;
const Tag = styled.div`
	padding: 4px 10px;
	background-color: var(--color-primary);
	color: var(--color-light);
	border-radius: 5px;
	font-size: 12px;
`;

export const CourseTags = ({ children }) => {
	return <CourseTag>{children}</CourseTag>;
};

export const Tags = ({ children }) => {
    return (
        <Tag>{children}</Tag>  
  );
}

export default Tags;
