import React from 'react'
import { StyledPrimaryButton, StyledSecondaryButton } from './StyledButton'

export const PrimaryButton = ({ onClick, label }) => {
	return (
		<StyledPrimaryButton onClick={onClick}>
			{label}
		</StyledPrimaryButton>
	);
};

export const SecondaryButton = ({ onClick, label }) => {
	return (
		<StyledSecondaryButton onClick={onClick}>
			{label}
		</StyledSecondaryButton>
	);
};