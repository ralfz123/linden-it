import React from "react";
import styled from "styled-components";
import { colors } from "../../GlobalStyle.js";

const handleColorType = (children) => {
	switch (children) {
		case "NEW":
			return colors.tagNew;
		case "IN PROGRESS":
			return colors.tagProgress;
		case "FINISHED":
			return colors.tagFinished;
		default:
			return colors.primary;
	}
};

const CourseTag = styled.div`
	position: absolute;
	padding: 4px 10px;
	background-color: ${({ children }) => handleColorType(children)};
	color: ${colors.dark};
	border-radius: 5px;
	left: -20px;
	font-size: 12px;
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

export const Tags = ({ children }) => {
	return <Tag>{children}</Tag>;
};

export default Tags;
