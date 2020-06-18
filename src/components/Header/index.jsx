import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';
import Title from '../Title';
// import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';
class Header extends Component {
	refCallback = (element) => {
		if (element) {
			this.props.getSize(element.getBoundingClientRect().height);
		}
	};
	componentDidMount() {
		// if (this.props.getSize !== this.props.getSize) {
		// 	this.props.getSize(this.elementRef.getBoundingClientRect());
		// }
	}
	componentDidUpdate() {
		// if (this.props.getSize !== this.props.getSize) {
		// 	return this.props.getSize(this.elementRef.getBoundingClientRect());
		// }

	}
	render() {
		return (
			<>
				{this.props.getSize ? (
					<StyledHeader ref={this.refCallback}>
						<div className='header-toolbar'>
							{this.props.history && (
								<BackButton history={this.props.history} />
							)}
						</div>
						<div className='title-large'>
							<Title title={this.props.title} />
						</div>
					</StyledHeader>
				) : (
					<StyledHeader>
						<div className='header-toolbar'>
							{this.props.history && (
								<BackButton history={this.props.history} />
							)}
						</div>
						<div className='title-large'>
							<Title title={this.props.title} />
						</div>
					</StyledHeader>
				)}
			</>
		);
	}
}

Header.propTypes = {
	children: PropTypes.object,
	getSize: PropTypes.func,
	history: PropTypes.any,
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
BackButton.propTypes = {
	history: PropTypes.shape({
		goBack: PropTypes.func
	})
};
