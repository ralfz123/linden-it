import React, { Component } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Content from "../components/Content/Content";
// import reCAPTCHA from "react-google-recaptcha";
import Input from "../components/Form/StyledInput";
import Button from "../components/Button";
// import StyledLink from "../components/Link/Link";
import { Link } from "react-router-dom";
// import { AiOutlineEye } from 'react-icons/ai';

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
			passwordError: "",
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
		if (this.state.password < 6) {
			passwordError = "Wachtwoord moet minimaal 6 tekens bevatten";
		}

		if (emailError || passwordError) {
			this.setState({ emailError, passwordError });
			return false;
		}
		return true;
	};

	handleSubmit(event) {
		const { email, password } = this.state;
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			// clear form
			this.setState(this.state);
		}
	}

	render() {
		return (
			<>
				<Header>
					<Title title={this.state.title} />
				</Header>
				<Content className='login-wrapper'>
					<form
						onSubmit={this.handleSubmit}
						className='login'
						// action='/login'
					>
						<div style={{ fontSize: 12, color: "red" }}>
							{this.state.emailError}
						</div>

						<div style={{ fontSize: 12, color: "red" }}>
							{this.state.passwordError}
						</div>

						<div className='field'>
							<label for='email'>E-mail</label>
							<Input
								label='Email'
								name='email'
								// type='email'
								onChange={this.handleChange}
								placeholder='E-mail'
								value={this.state.email}
								required
							/>
						</div>

						<div className='field'>
							<label for='password'>Wachtwoord</label>
							<Input
								label='Wachtwoord'
								name='password'
								// type='password'
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

						<Button className='logbutt' type='button'>
							Inloggen
						</Button>

						<p className='privacy'>
							Je gaat akkoord met het Privacy Statement van
							Linden-IT
						</p>
					</form>
					{/* <reCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
				</Content>
			</>
		);
	}
}

export default Login;
