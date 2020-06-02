import React, { Component } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	padding: 8px;
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
