import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';
import {Link }from 'react-router-dom';
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
				<div className='header-toolbar'>
					<Link to='courses/123'>hallo </Link>
				</div>
				{this.props.children}
			</StyledHeader>
		);
	}
}

Header.propTypes = {
	children: PropTypes.object
};

export default Header;
