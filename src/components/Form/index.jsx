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

BaseTextInput.defaultProps = {
	type: 'text'
};

BaseTextInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func
};

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

BaseNumberInput.defaultProps = {
	type: 'number'
};

BaseNumberInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
};


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

BaseTimeInput.defaultProps = {
	type: 'time'
};

BaseTimeInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
};

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

BaseDateInput.defaultProps = {
	type: 'time'
};

BaseDateInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
};