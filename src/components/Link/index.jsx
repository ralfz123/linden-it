import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

// Export Link component with styling
export const StyledLink = styled(Link)`
	background-color: ${colors.primary};
	border: 2px solid ${colors.primary};
	color: white;
	border-radius: 100px;
	min-height: 50px;
	height: 48px;
	line-height: 45px;
	text-decoration: none;
	padding: 0 35px;
	cursor: pointer;
	display: inline-block;

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

// Export Secondary Link component with styling
export const StyledSecondaryLink = styled(StyledLink)`
	background-color: ${colors.light};
	color: ${colors.primary};

	:hover {
		background-color: ${colors.primary};
		color: ${colors.light};
	}
`;

// eslint-disable-next-line react/display-name
export default (props) => {
	return <StyledLink {...props} />;
};
