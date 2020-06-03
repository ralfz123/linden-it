import React, { Component } from 'react'
import PropTypes from "prop-types";
import StyledButton from './StyledButton'

class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<StyledButton onClick={this.props.onCLick}>
				{this.props.children}
			</StyledButton>
		);
	}
}


Button.propTypes = {

};


export default Button;
