import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';
class Header extends Component {
	
	render() {
		console.log(this.props.history)
		return (
			<StyledHeader>
				
				<div className='header-toolbar'>
					{this.props.history && <BackButton history={this.props.history} />}
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


const StyledBackButton = styled.div`

display:flex;
align-items:center;

cursor: pointer;

.react-icons {
	font-size:25px;
}

`;

export const BackButton = ({ history }) => {
	return (
		<StyledBackButton onClick={() => history.goBack()}>
			<FiChevronLeft className='react-icons' />
			Back
		</StyledBackButton>
	);
};