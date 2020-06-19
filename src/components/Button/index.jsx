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
	// disabled: PropTypes.disable
};

export const SecondaryButton = ({ to, className, onClick, label, disabled }) => {
	return (
		<StyledSecondaryButton to={to} className={className} onClick={onClick} disabled={disabled}>
			{label}
		</StyledSecondaryButton>
	);
};

SecondaryButton.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	label: PropTypes.string,
	// disabled: PropTypes.disable
};
