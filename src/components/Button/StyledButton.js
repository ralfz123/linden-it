import styled from "styled-components";
import { colors } from "../../GlobalStyle.js";

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

	:hover {
		background-color: ${colors.light};
		color: ${colors.primary};
	}
`;

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
	background-color: ${colors.light};
	color: ${colors.primary};

	:hover {
		background-color: ${colors.primary};
		color: ${colors.light};
	}
`;
