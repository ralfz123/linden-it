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
};
<<<<<<< HEAD

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
=======
>>>>>>> ab935c75279661e69b7e6ee59f3a2c1d3b832693
