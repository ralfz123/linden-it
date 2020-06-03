import React, { Component } from "react";
import PropTypes from 'prop-types';
import StyledInput from "./StyledInput";


class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledInput onClick={this.props.onCLick}>
        {this.props.children}
      </StyledInput>
    );
  }
}

Input.defaultProps = {
  type: "text",
  className: "",
};


Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default Input;


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