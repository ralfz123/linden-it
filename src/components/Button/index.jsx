import React from 'react'
import { StyledPrimaryButton, StyledSecondaryButton } from './StyledButton'

export const PrimaryButton = ({ onClick, label, disabled }) => {
	return (
		<StyledPrimaryButton onClick={onClick} disabled={disabled}>
			{label}
		</StyledPrimaryButton>
	);
};

export const SecondaryButton = ({ onClick, label, disabled }) => {
	return (
		<StyledSecondaryButton onClick={onClick} disabled={disabled}>
			{label}
		</StyledSecondaryButton>
	);
};