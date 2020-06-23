import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	getLoginLoadingState,
	getUserAuthState,
	getLoginErrorState,
} from '../store/reducers/selectors/LoginSelectors';
import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import Title from '../components/Title';
import Header from '../components/Header';
import Content from '../components/Content/Content';
import { BaseTextInput } from '../components/Form';
import { PrimaryButton } from '../components/Button';
import { Link, Redirect } from 'react-router-dom';
import { Popup } from '../components/Popup';
import { Spinner } from '../components/Spinner';

class Login extends Component {
	// Start state
	state = {
		email: '',
		password: '',
		title: 'Inloggen',
	};

	// Function to enter values
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	// Function to submit and login
	handleSubmit = (event) => {
		event.preventDefault(event);
		this.props.ValidateLogin(this.state.email, this.state.password);
	};

	// Function to enable the submit button
	checkButtonEnabledState = () => {
		const { email, password } = this.state;
		return email.length < 5 && password.length < 6;
	};

	render() {
		const { isLoading, isAuthenticated, loginError } = this.props;
		const buttonState = this.checkButtonEnabledState();
		if (isLoading) {
			return <Spinner />;
		}
		return (
			<>
				{isAuthenticated && <Redirect to='/' />}
				<Header title='Inloggen' />
				<Content>
					{/* When email or/and password are invalid */}
					{loginError && (
						<Popup>
							<div>
								Oeps! Het lijkt erop dat het e-mailadres en/of
								het wachtwoord niet klopt. Probeer het opnieuw
								of reset je wachtwoord.
							</div>
						</Popup>
					)}
					{/* Login form with email and password inputs */}
					<form
						onSubmit={this.handleSubmit}
						className='login'
						// action='/login'
					>
						<div className='field'>
							<label htmlFor='email'>E-mail</label>
							<BaseTextInput
								label='Email'
								name='email'
								type='email'
								onChange={this.handleChange}
								placeholder='E-mail'
								value={this.state.email}
								required
							/>
						</div>

						<div className='field'>
							<label htmlFor='password'>Wachtwoord</label>
							<BaseTextInput
								label='Wachtwoord'
								name='password'
								type='password'
								onChange={this.handleChange}
								placeholder='Wachtwoord'
								value={this.state.password}
								minLength='6'
								required
							/>
							{/* Link when you forgot your password */}
							<Link
								className='link pw-forgot'
								to='/reset-password'
							>
								Wachtwoord vergeten?
							</Link>
						</div>

						{/* Login form with email and password inputs */}
						<PrimaryButton
							disabled={buttonState}
							type='submit'
							label='Inloggen'
						/>
						{/* Privary Disclaimer */}
						<p className='privacy'>
							Je gaat akkoord met het Privacy Statement van
							Linden-IT
						</p>
					</form>
				</Content>
			</>
		);
	}
}

// State management - Props
const mapStateToProps = (state) => {
	return {
		isLoading: getLoginLoadingState(state),
		isAuthenticated: getUserAuthState(state),
		loginError: getLoginErrorState(state),
	};
};
// State management - Actions
const actions = {
	ValidateLogin,
};
// Export
export default connect(mapStateToProps, actions)(Login);
