import React, { Component } from "react";
import StyledFooter from './StyledFooter';

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
