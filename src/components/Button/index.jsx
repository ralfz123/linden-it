import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './StyledButton';
import PropTypes from 'prop-types';


export const PrimaryButton = ({ onClick, label, disabled }) => {
	return (
		<StyledPrimaryButton 
			onClick={onClick} 
			label={label}
			disabled={disabled}>
			{label}
		</StyledPrimaryButton>
	);
};

PrimaryButton.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
	disabled: PropTypes.disable
};

export const SecondaryButton = ({ onClick, label, disabled }) => {
	return (
		<StyledSecondaryButton onClick={onClick} disabled={disabled}>
			{label}
		</StyledSecondaryButton>
	);
};

SecondaryButton.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
	disabled: PropTypes.disable
};

