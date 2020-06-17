import React, { Component } from 'react';
// import { ToggleButton } from '../Button';
import Switch from 'react-switch';

export default class Toggle extends Component {
	// state = {
	//     on: false,
	// }

	// toggle = () => {
	//     this.setState ({
	//         on: !this.state.on
	//     })
	// }

	// render() {
	// 	return (
	// 		<div>{this.state.on && this.props.children}
	// 			<ToggleButton onClick={this.toggle}>
	//                 <div>&nbsp;</div>
	//             </ToggleButton>
	// 		</div>
	// 	);
	// }

	constructor() {
		super();
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(checked) {
		this.setState({ checked });
	}

	render() {
		return (
			<label>
				{<span>Switch with default style</span>}
				<Switch
					onColor='#FC7928'
                    ofColor='#717171'
					uncheckedIcon={false}
					checkedIcon={false}
                    handleDiameter={20}
                    width={60}
					className='toggle'
					onChange={this.handleChange}
					checked={this.state.checked}
				/>
			</label>
		);
	}
}
