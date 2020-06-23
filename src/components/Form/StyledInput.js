import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

export const StyledBaseTextInput = styled.input`
	/* position: fixed; */
	/* position: -webkit-sticky;*/
	left: 0;
	right: 0;
	width: 100%;
	background-color: ${colors.light};
	border: 1px solid ${colors.grayLightTwo};

	outline: none;
	color: ${colors.gray};
	box-sizing: border-box;
	border-radius: 5px;
	padding: 10px;
	line-height: 1.5em;
	align-items: center;
	appearance: none;

	&:valid:not(:focus):not(:placeholder-shown) {
		border-color: ${colors.green};
	}
	&:invalid:not(:focus):not(:placeholder-shown) {
		border-color: ${colors.red};
	}
`;

export const StyledBaseNumberInput = styled.input`
	width: 25%;
	background-color: ${colors.light};
	border: 1px solid ${colors.grayLightTwo};
	border-radius: 5px;
	padding: 10px;
	color: ${colors.grayLightThree};
	outline: none;

	:focus {
		color: ${colors.dark};
	}
`;

export const StyledBaseTimeInput = styled.input`
	width: 30%;
	background-color: ${colors.light};
	border: 1px solid ${colors.grayLightTwo};
	border-radius: 5px;
	padding: 10px;
	outline: none;
`;

export const StyledBaseDateInput = styled.input`
	width: 100%;
	background-color: ${colors.light};
	border: 1px solid ${colors.grayLightTwo};
	border-radius: 5px;
	padding: 10px;
	color: ${colors.grayLightThree};
	outline: none;
`;

export const StyledBaseCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
	/* width: 20%; */
	background-color: ${colors.green};
	/* border: 1px solid ${colors.grayLightTwo}; */
	border-radius: 5px;
	/* padding: 10px; */
	outline: none;
`;