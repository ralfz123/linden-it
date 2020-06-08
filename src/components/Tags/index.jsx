import React from 'react'
import styled from "styled-components";

const handleColorType = (children) => {
  switch (children) {
    case "NEW":
      return "#000";
    case "danger":
      return "color: #fff; background: #f56342;";
    default:
      return " #eee";
  }
};

const CourseTag = styled.div`
	position: absolute;
	padding: 4px 10px;
	background-color: ${handleColorType};
	

	color: var(--color-light);
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
    console.log(handleColorType(children))
	return <CourseTag>{children}</CourseTag>;
};

export const Tags = ({ children }) => {
    return (
        <Tag>{children}</Tag>  
  );
}

export default Tags;
