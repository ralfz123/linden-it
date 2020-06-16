import React from 'react';
import PropTypes from 'prop-types';
import { StyledBaseTextInput, StyledBaseNumberInput} from './StyledInput';


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
	children: PropTypes.any,
	className: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.any,
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

BaseNumberInput.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.any,
};




// const FormInput = ({
//   name,
//   type,
//   placeholder,
//   onChange,
//   className,
//   value,
//   error,
//   children,
//   label,
//   ...props
// }) => {
//   return (
//     // <StyledInput>
//     <React.Fragment>
//       <label htmlFor={name}>{label}</label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         onChange={onChange}
//         value={value}
//         className={className}
//       />
//     </React.Fragment>
//     // </StyledInput>
//   );
// };