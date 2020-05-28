import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--color-gray-light);
	padding-left: max(8px, env(safe-area-inset-left));
	padding-right: max(8px, env(safe-area-inset-right));
	padding-bottom: max(8px, env(safe-area-inset-bottom));
`;

class Footer extends Component {
	render() {
		return (
		<StyledFooter>
			{this.props.children}
		</StyledFooter>
		)
	}
}

Footer.propTypes = {};

export default Footer;
