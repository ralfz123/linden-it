import React, { Component } from 'react';
// import { ToggleButton } from '../Button';
import Switch from 'react-switch';

export default class Toggle extends Component {
	// static defaultProps = {
	// 		checked:false,
	// }
	state = {
		checked: false,
	};

	toggle = () => {
		this.setState({
			on: !this.state.on,
		});
	};
	// componentDidMount() {
	// 		 this.handleChange(this.state);
	// 	}
	// 	componentDidUpdate() {
	// 		this.handleChange(this.state);
	// 	}
	// 	componentWillUnmount() {
	// 		window.removeEventListener('click', this.handleClick(this.state), false);
	// 	}
	toggleChecked() {
		this.setState((prevState) => ({
			checked: !prevState.checked,
		}));
	}

	handleChange(checked) {
		this.setState({ checked });
	}

	// onClick(checked) {
	// 	this.setState({ checked });
	// }

	render() {
		return (
			<div>
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
						onClick={this.toggleChecked}
						// onClick needs to have a FUNCTION.
					/>
				</label>
			</div>
		);
	}
}
