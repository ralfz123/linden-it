import React, { Component } from 'react'
import StyledButton from './StyledButton'

class Button extends Component {
	render() {
		return (
			<StyledButton onClick={this.props.onCLick}>
				{this.props.children}
			</StyledButton>
		);
	}
}



export default Button;
