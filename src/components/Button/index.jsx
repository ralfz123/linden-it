import React from 'react'
import { StyledBaseButton, StyledLoginButton } from './StyledButton'

export const BaseButton = ({ onClick, label }) => {
	return (
		<StyledBaseButton onClick={onClick}>
			{label}
		</StyledBaseButton>
	);
};

export const LoginButton = ({ onClick, label }) => {
	return (
		<StyledLoginButton onClick={onClick}>
			{label}
		</StyledLoginButton>
	);
};
