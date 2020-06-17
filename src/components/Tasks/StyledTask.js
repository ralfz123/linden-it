import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

export const StyledTask = styled.div`
	background-color: ${colors.green};
	border: 2px solid ${colors.red};
	color: white;
	border-radius: 100px;
	min-height: 50px;
	height: 48px;
	line-height: 48px;
	text-decoration: none;
	padding: 0 64px;
	cursor: pointer;

	&:disabled {
		background-color: lightgrey;
		color: white;
		pointer-events: none;
		border-color: lightgrey;
	}
`;
