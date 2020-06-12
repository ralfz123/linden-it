import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';
import { FiCalendar } from 'react-icons/fi';

const StyledGoals = styled.div`
	background-color: ${colors.red};
	color: ${colors.light};
	font-family: Josefin Sans;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 41px;
	text-align: center;

	height: 100vh;
	padding: 8px;
	margin: 0 auto;
	position: absolute;
	z-index: 10;
	width: 100vw;
	left: 0;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: wrap;

	p {
		color: ${colors.light};
		position: absolute;

		font-family: Lato;
		font-style: normal;
		font-weight: 300;
		font-size: 15px;
		/* line-height: 17px; */
	}

	button {
		width: 70%;
		margin: 0 auto;
	}

	.course-icon {
		font-size: 30px;
		text-align: center;
		color: ${colors.light};
		width: 100%;
	}
`;
export const Goals = ({ children }) => {
	return (
		<StyledGoals>
			<FiCalendar className='course-icon' />
			{children}
		</StyledGoals>
	);
};

Goals.propTypes = {
	children: PropTypes.object,
};

export default Goals;
