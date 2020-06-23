import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton, StyledAgendaButton } from './StyledButton';
import PropTypes from 'prop-types';

// Export Primary Button with its props
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

// PropTyps Primary Button
PrimaryButton.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

// Export Secondary Button with its props
export const SecondaryButton = ({ to, className, onClick, label, disabled }) => {
	return (
		<StyledSecondaryButton to={to} className={className} onClick={onClick} disabled={disabled}>
			{label}
		</StyledSecondaryButton>
	);
};

// PropTyps Secondary Button
SecondaryButton.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	label: PropTypes.string,
};

// Export Agenda Button with its props
export const AgendaButton = ({ onClick, label }) => {
	return (
		<StyledAgendaButton onClick={onClick} >
			{label}
		</StyledAgendaButton>
	);
};

// PropTyps Agenda Button
AgendaButton.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};
