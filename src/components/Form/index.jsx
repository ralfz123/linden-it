import React from 'react';
import PropTypes from 'prop-types';
import { StyledBaseTextInput, StyledBaseNumberInput, StyledBaseTimeInput, StyledBaseDateInput } from './StyledInput';


/**
 *
 * Base text input element
 *
 * @export
 * @param {*} { name, placeholder, value, onChange, type, children }
 * @returns
 */
export function BaseTextInput ({ name, placeholder, value, onChange, type, children }) {
	return (
		<StyledBaseTextInput
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			type={type}>
			{children}
		</StyledBaseTextInput>
	);
}

// Default props Base Text Input
BaseTextInput.defaultProps = {
	type: 'text'
};

// Proptypes Base Text Input
BaseTextInput.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.any,
};

// Export Base Number Input
export const BaseNumberInput = ({ name, placeholder, value, onChange, type, children }) => {
	return (
		<StyledBaseNumberInput
			value={value}
			placeholder={placeholder}
			name={name}
			type={type}
			onChange={onChange}>
			{children}
		</StyledBaseNumberInput>
	);
};

// PropTypes Base Number Input
BaseNumberInput.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.any,
};

// Export Base Time Input
export const BaseTimeInput = ({ name, placeholder, value, onChange, type, children }) => {
	return (
		<StyledBaseTimeInput
			value={value}
			placeholder={placeholder}
			name={name}
			type={type}
			onChange={onChange}>
			{children}
		</StyledBaseTimeInput>
	);
};

// Default props Base Time Input
BaseTimeInput.defaultProps = {
	type: 'time'
};

// PropTypes Base Time Input
BaseTimeInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
};

// Export Base Date Input
export const BaseDateInput = ({ name, placeholder, value, onChange, type, children }) => {
	return (
		<StyledBaseDateInput
			value={value}
			placeholder={placeholder}
			name={name}
			type={type}
			onChange={onChange}>
			{children}
		</StyledBaseDateInput>
	);
};

// Default Props Base Date Input
BaseDateInput.defaultProps = {
	type: 'time'
};

// PropTypes Base Date Input
BaseDateInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
};