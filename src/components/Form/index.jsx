import React from "react";
import PropTypes from 'prop-types';
import { StyledBaseTextInput, StyledBaseNumberInput} from "./StyledInput";


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
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onchange}>
      {children}
    </StyledBaseTextInput>
  )
}

BaseTextInput.defaultProps = {
  type: 'text'
}

BaseTextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export const BaseNumberInput = ({ name, placeholder, value, onChange, type, children }) => {
  return (
    <StyledBaseNumberInput
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onchange}>
      {children}
    </StyledBaseNumberInput>
  )
}

BaseNumberInput.defaultProps = {
  type: 'number'
}

BaseNumberInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
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