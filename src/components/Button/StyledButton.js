import styled from "styled-components";
import {colors} from "../../GlobalStyle.js"

export const StyledBaseButton = styled.button`
	background-color: ${colors.primary};
	border: 2px solid ${colors.primary};
	color: var(--color-light);
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

export const StyledLoginButton = styled(StyledBaseButton)`
background-color: ${colors.light};
			color: ${colors.primary};

			:hover {
				background-color: ${colors.primary};
				color: ${colors.light};
			}
`
