import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0,
		};
	}

	render() {
		return (
			<StyledHeader>
				<div className='header-toolbar'></div>
				{this.props.children}
			</StyledHeader>
		);
	}
}

Header.propTypes = {
	children: PropTypes.object
};

export default Header;
