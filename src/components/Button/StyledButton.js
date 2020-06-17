import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

export const StyledPrimaryButton = styled.button`
	background-color: ${colors.primary};
	border: 2px solid ${colors.primary};
	color: white;
	border-radius: 100px;
	min-height: 50px;
	height: 48px;
	line-height: 48px;
	text-decoration: none;
	padding: 0 64px;
	cursor: pointer;
	font-family: Lato;
	font-size: 14px;

	:hover {
		background-color: ${colors.light};
		color: ${colors.primary};
	}
	&:disabled {
		background-color: lightgrey;
		color: white;
		pointer-events: none;
		border-color: lightgrey;
	}
`;

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
	background-color: ${colors.light};
	color: ${colors.primary};
	border: 2px solid ${colors.light};

	:hover {
		background-color: ${colors.primary};
		color: ${colors.light};
	}
`;

export const StyledToggleButton = styled.button`
	width: 30%;
	border-radius: 50px;
	padding: 5px 20px;
	position: relative;
	/* top: 30vh; */
	/* z-index: 10; */

	background-color: ${colors.green};
	color: ${colors.light};
	border: 2px solid ${colors.light};

	div {
		background-color: red;
		width: 40%;
		border-radius: 50px;
		cursor: pointer;
	}
	
	 /* &:active div {
		background-color: purple;
		transform: translateX(40px);
	}  */
	

	/* &:active:not(:focus) {
		border-color: ${colors.pink};
	}

	&:focus:not(:active) {
		border-color: ${colors.pink};
	} */
`; 