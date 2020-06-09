import React, { Component } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import reCAPTCHA from "react-google-recaptcha";
import { BaseTextInput } from "../components/Form";
import { BaseButton } from "../components/Button";
import { LoginButton } from "../components/Button";
// import StyledLink from "../components/Link/Link";
import { Link } from "react-router-dom";
import { Popup } from "../components/Popup";
// import { AiOutlineEye } from 'react-icons/ai';
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
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			title: "Inloggen",
			emailError: "",
			passwordError: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.validate = this.validate.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	validate = () => {
		let emailError = "";
		let passwordError = "";

		// email error
		if (!this.state.email.includes("@")) {
			emailError = "Email is incorrect";
			console.log("Bevat geen '@' !");
		}

		// password error
		if (this.state.password.length < 6) {
			passwordError = "Wachtwoord moet minimaal 6 tekens bevatten";
		}

		if (emailError || passwordError) {
			this.setState({ emailError, passwordError });
			return false;
		}
		return true;
	};

	handleSubmit(event) {
		const recaptchaRef = React.createRef();
		event.preventDefault(event);
		
		const { email, password } = this.state;
		const isValid = this.validate();
		const recaptchaValue = recaptchaRef.current.getValue({email, password});
		this.props.handleSubmit(recaptchaValue);
		if (isValid) {
			console.log(this.state);
			// clear form
			this.setState(this.state);
		}

		
	}

	succesfulRecaptcha() {
		
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
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content>
					<Popup>
						<div className='popup-error-text'>
							{this.state.emailError}
						</div>

						<div className='popup-error-text'>
							{this.state.passwordError}
						</div>
					</Popup>
					<form
						// onSubmit={this.handleSubmit}
						onSubmit={() => {this.recaptchaRef.current.execute(); }}
						className='login'
						// action='/login'
					>
						<div className='field'>
							<label for='email'>E-mail</label>
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
							<label for='password'>Wachtwoord</label>
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
						
						<LoginButton label='Inloggen' type='submit' />

						<p className='privacy'>
							Je gaat akkoord met het Privacy Statement van
							Linden-IT
						</p>
						
						<reCAPTCHA
						ref={this.recaptchaRef}
						sitekey='Your client site key'
						onChange={this.succesfulRecaptcha}
						size="invisible"
					/>
					</form>
					
				</Content>
			</>
		);
	}
}

export default Login;
