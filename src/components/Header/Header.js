import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	position: fixed;
	/* position: -webkit-sticky;
	position: sticky; */
	left: 0;
	right: 0;
	top: 0;
	width: 100vw;
	background-color: var(--color-primary);
	color: var(--color-light);
`;

export default class Header extends Component {
	render() {
		return (
			<StyledHeader>
				{this.props.children}
			</StyledHeader>
		);
	}
}




