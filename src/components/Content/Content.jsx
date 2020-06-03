import React, { Component } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	padding-top:100px;
	height:100%;
`;
export default class Content extends Component {
	render() {
		return (
			<StyledMain>
				{this.props.children}
			</StyledMain>
		)
	}
}
