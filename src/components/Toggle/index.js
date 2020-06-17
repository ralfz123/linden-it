import React, { Component } from 'react';
import { ToggleButton } from '../Button';

export default class Toggle extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState ({
            on: !this.state.on
        })
    }

	render() {
		return (
			<div>{this.state.on && this.props.children}
				<ToggleButton onClick={this.toggle}>
                    <div>&nbsp;</div>
                </ToggleButton>
			</div>
		);
	}
}
