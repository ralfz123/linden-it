import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton, StyledAgendaButton } from './StyledButton';
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
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

export const SecondaryButton = ({ onClick, label, disabled }) => {
	return (
		<StyledSecondaryButton onClick={onClick} disabled={disabled}>
			{label}
		</StyledSecondaryButton>
	);
};

SecondaryButton.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

export const AgendaButton = ({ onClick, label }) => {
	return (
		<StyledAgendaButton onClick={onClick} >
			{label}
		</StyledAgendaButton>
	);
};

StyledAgendaButton.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};