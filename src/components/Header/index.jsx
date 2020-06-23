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

	render() {
		return (
			<>
				{/* {if a size is given use callback to pass the header hight to the parent component. use
				used on the courses and course page to pass padding top to the TabBar */}
				{this.props.getSize ? (
					<StyledHeader
						ref={this.refCallback}
						className={this.props.className}
					>
						<div className='header-toolbar'>
							{this.props.history && (
								<BackButton
									history={this.props.history}
									onClick={() => this.props.history.goBack()}
									label={this.props.label}
								/>
							)}
							{this.props.prevStep && (
								<BackButton
									history={this.props.history}
									onClick={this.props.prevStep}
									label={this.props.label}
								/>
							)}
						</div>
						<div className='title-large'>
							<Title title={this.props.title} />
						</div>
					</StyledHeader>
				) : (
					<StyledHeader className={this.props.className}>
						<div className='header-toolbar'>
							<div className='left'>
								{/* if history is given show the back button */}
								{this.props.history && (
									<BackButton
										history={this.props.history}
										onClick={() =>
											this.props.history.goBack()
										}
										label={this.props.label}
									/>
								)}
								{/* This backbutton is used on the setting goals component */}
								{this.props.prevStep && (
									<BackButton
										history={this.props.history}
										onClick={this.props.prevStep}
										label={this.props.label}
									/>
								)}
							</div>
								
							{/* If proptypes small is true thof the small title, otherwise thow the large title */}
							{this.props.small ? (
								<div className='title'>{this.props.title}</div>
							) : (
								''
							)}
							<div className='right'></div>
						</div>
						{this.props.small ? (
							''
						) : (
							<div className='title-large'>
								<Title title={this.props.title} />
							</div>
						)}
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
	display: flex;
	align-items: center;
	cursor: pointer;
	.react-icons {
		font-size: 25px;
	}
`;
// back button component
export const BackButton = ({ history, label, onClick }) => {
	return (
		<StyledBackButton onClick={onClick}>
			<FiChevronLeft className='react-icons' />
			{label}
		</StyledBackButton>
	);
};
BackButton.propTypes = {
	history: PropTypes.shape({
		goBack: PropTypes.func,
	}),
};
