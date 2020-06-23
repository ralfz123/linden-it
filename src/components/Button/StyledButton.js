import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

// Styling Primary Button
export const StyledPrimaryButton = styled.button`
	background-color: ${colors.primary};
	border: 2px solid ${colors.primary};
	color: white;
	border-radius: 100px;
	min-height: 50px;
	height: 48px;
	line-height: 48px;
	text-decoration: none;
	padding: 0 35px;
	cursor: pointer;

	&.onboarding-button {
	}
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

// Styling Secondary Button
export const StyledSecondaryButton = styled(StyledPrimaryButton)`
	background-color: ${colors.light};
	color: ${colors.primary};

	:hover {
		border: 2px solid ${colors.light};
		background-color: ${colors.primary};
		color: ${colors.light};
	}
`;

// Styling Agenda Button
export const StyledAgendaButton = styled(StyledPrimaryButton)`
	background-color: ${colors.primary};
	color: ${colors.light};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	text-align: center;
	margin: 0 auto;

	:hover {
		background-color: ${colors.primary};
		color: ${colors.light};
	}
`;
