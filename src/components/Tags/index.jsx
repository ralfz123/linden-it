import React, { Component } from 'react'
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

class Tags extends Component {
    render() {
        return (
              <Tag>{this.props.children}</Tag>  
        );
    }
}


Tags.propTypes = {

};


export default Tags;
