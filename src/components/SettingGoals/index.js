import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const StyledGoals = styled.div`
	background-color: ${colors.red};
	height: 100vh;
	padding: 8px;
	margin: 0 auto;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100vw;
	position: absolute;
	z-index: 10;
	left: 0;

	div {
		font-family: Lato;
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 13px;
		color: ${colors.red};
		width: 84%;
	}
	.error-icon {
		font-size: 30px;
		text-align: left;
		color: ${colors.red};
		/* margin: 0 auto; */
		width: 10%;
	}
`;
export const Goals = ({ children }) => {
	return (
		<StyledGoals>
			<AiOutlineExclamationCircle className='course-icon' />
			{children}
		</StyledGoals>
	);
};

Goals.propTypes = {
	children: PropTypes.object
};

export default Goals;
