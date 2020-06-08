import React from 'react'
import styled from "styled-components";

const Tag = styled.div`
position:absolute;
	padding: 4px 10px;
    background-color:var(--color-primary);
    color:var(--color-light);
    border-radius:5px;
    left:-20px;
    font-size:12px;
`;

export const Tags = ({ children }) => {
    return (
        <Tag>{children}</Tag>  
  );
}

export default Tags;
