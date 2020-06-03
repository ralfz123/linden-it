import React, { Component } from 'react';
import StyledHeader from "./StyledHeader";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0
		}
		
	}

	render() {
		return (
			<StyledHeader>
				<div className="header-toolbar"></div>
				{this.props.children}
			</StyledHeader>
		);
	}
}

Header.propTypes = {

};

export default Header;
