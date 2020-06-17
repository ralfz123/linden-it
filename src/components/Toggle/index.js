import React, { Component } from 'react';
// import { ToggleButton } from '../Button';
import Switch from 'react-switch';

export default class Toggle extends Component {
	// state = { on: false}

	// toggle = () => {
	//     this.setState ({
	//         on: !this.state.on
	//     })
	// }

	// render() {
	// 	return (
	// 		<div>{this.state.on && this.props.children}
	// 			<ToggleButton
	// 				onClick={this.toggle}
	// 					>
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

	toggle = () => {
	    this.setState ({
	        on: !this.state.on
	    })
	}

	handleChange(checked) {
		this.setState({ checked });
	}

	onClick(checked) {
		this.setState({ checked });
	}


	render() {
		return (
			<div>{this.state.on && this.props.label}
				<label>
					<Switch
						onColor='#FC7928'
						ofColor='#717171'
						uncheckedIcon={false}
						checkedIcon={false}
						handleDiameter={18}
						width={60}
						className='toggle'
						onChange={this.handleChange}
						checked={this.state.checked}
						onClick={this.onClick} 
						// onClick needs to have a FUNCTION.
					/>
				</label>
			</div>
		);
	}
}
