import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

// Task component styling
export const StyledTask = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	background-color: ${colors.light};
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	text-decoration: none;
	width: 70%;
	margin-left: 25px;
	color: ${colors.grayLightThree};

	.bell-icon {
		fill: ${colors.grayLightThree};
		background-color: ${colors.grayLightFour};
		stroke-width: 1;
		stroke: ${colors.grayLightThree};
		width: 25px;
		height: 25px;
		border-radius: 60px;
		padding: 5px;
		margin-right: 10px;
	}

	.pencil-icon {
		fill: ${colors.grayLightThree};
		margin-left: 52px;
	}

	/* current day */
	p:active div:active {
		background-color: ${colors.primary};
		color: ${colors.light};
		font-weight: 400;
	}

	/* Achieved */

	.check-icon {
		border-radius: 100%;
		padding: 5px;
		width: 25px;
		height: 25px;
		background: ${colors.green};
		color: ${colors.light};
	}

	p:active {
		color: ${colors.green};
	}
`;
