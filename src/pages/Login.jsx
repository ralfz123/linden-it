import React, { Component } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import {BaseTextInput} from "../components/Form/";
import {PrimaryButton} from "../components/Button";
import { Link, Redirect } from "react-router-dom";
import { Popup } from "../components/Popup";

// import { Formik } from 'formik';
// import * as Emailvalidator from 'email-validator';
// import * as Yup from 'yup';

// const initialState = {
// 	email: "",
// 	password: "",
// 	title: "Inloggen",
// 	emailError: "",
// 	passwordError: "",
// }
class Login extends Component {
	state = {
		email: "",
		password: "",
		title: "Inloggen",
		loginError: null,
		redirectToDashboard: false
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	validate = () => {
		const { email, password} = this.state
		const validEmail = 'ralf_zonneveld@hotmail.com';
		const validPassword = 'welkom123'
		return email.includes("@") && email === validEmail && password.length > 6 && password === validPassword
	};
	

	handleSubmit = (event) => {
		event.preventDefault(event);
		const isValid = this.validate();
		console.log(isValid)
		this.setState({
			loginError: isValid ? null : 'Email of wachtwoord onjuist.',
			email: '',
			password: '',
			redirectToDashboard: isValid
		})
	}

	checkButtonEnabledState = () => {
		const { email, password } = this.state;
		return email.length < 5 && password.length < 6;
	}

	// const ValidatedLoginForm = () => {
	// 	<Formik
	// 		initialValues={{ email: "", password: "" }}
	// 		onSubmit={( values )}
	// 	>
	// 	{props => {
	// 			const {
	// 				values,
	// 				touched,
	// 				errors,
	// 				handleChange,
	// 				handleBlur,
	// 				handleSubmit
	// 			} = props;
	// 			return (
	// 				<div>
	// 					<h1>Formpieee</h1>
	// 				</div>
	// 			);
	// 		}
	// 	}
	// 	</Formik>
	// }

	render() {
		const { loginError, redirectToDashboard } = this.state;
		const buttonState = this.checkButtonEnabledState();
	
		return (
			<>
				{redirectToDashboard && <Redirect to="/" />}
				<Header>
					<Title title='Inloggen' />
				</Header>
				<Content>
					{loginError && <Popup>
						<div className='popup-error-text'>
							{loginError}
						</div>

						
					</Popup>}
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
							{/* <i className='eye password-icon'></i> */}
							{/* <AiOutlineEye className="eye password-icon" /> */}

							<Link
								className='link pw-forgot'
								to='/reset-password'
							>
								Wachtwoord vergeten?
							</Link>
						</div>

						<PrimaryButton disabled={buttonState} type='submit' label="Inloggen" />

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

export default Login;
