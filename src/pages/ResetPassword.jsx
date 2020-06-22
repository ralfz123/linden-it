import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import { BaseTextInput } from '../components/Form';
import { PrimaryButton } from '../components/Button';

class Login extends Component {
	// Start state
	state = {
		password: '',
		title: 'Wachtwoord veranderen',
	};

	// Function to enter values
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	// Function to submit - don't works yet
	handleSubmit = (event) => {
		event.preventDefault(event);
		// this.props.ValidateLogin(this.state.email, this.state.password);
	};

	render() {
		const { title } = this.state;
		return (
			<>
				<Header title={title} />
				<Content className='login-wrapper'>
					{/* Password forgot page */}
					<form
						onSubmit={this.handleSubmit}
						className='login'
						method='POST'
					>
						<div className='field'>
							<label htmlFor='password'>Nieuw wachtwoord</label>
							<BaseTextInput
								label='Wachtwoord'
								name='password'
								type='password'
								onChange={this.handleChange}
								placeholder='Je nieuwe wachtwoord'
								value={this.state.password}
								minLength='6'
								required
							/>
						</div>

						<div className='field'>
							<label htmlFor='password'>
								Herhaal nieuw wachtwoord
							</label>
							<BaseTextInput
								label='Wachtwoord'
								name='password'
								type='password'
								onChange={this.handleChange}
								placeholder='Je nieuwe wachtwoord'
								value={this.state.password}
								minLength='6'
								required
							/>
						</div>

						{/* Button to submit the form */}
						<PrimaryButton
							label='Wachtwoord opslaan'
							type='submit'
						/>
					</form>
				</Content>
			</>
		);
	}
}

export default Login;
