import React, { Component } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Content from "../components/Content/Content";
import Input from "../components/Form/StyledInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
// import { AiOutlineEye } from 'react-icons/ai';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      title: "Wachtwoord veranderen",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
  }

  render() {
    return (
		<>
			<Header>
				<Title title={this.state.title} />
			</Header>
			<Content className='login-wrapper'>
				<form onSubmit={this.handleSubmit} className='login' method='POST'>
					<div className='field'>
						<label for='password'>Nieuw wachtwoord</label>
						<Input
							label='Wachtwoord'
							name='password'
							type='password'
							onChange={this.handleChange}
							placeholder='Je nieuwe wachtwoord'
							value={this.state.password}
							minLength= '6'
                            required
						/>
						{/* <i className='eye password-icon'></i> */}
						{/* <AiOutlineEye className="eye password-icon" /> */}
					</div>

                    <div className='field'>
						<label for='password'>Bevestig nieuw wachtwoord</label>
						<Input
							label='Wachtwoord'
							name='password'
							type='password'
							onChange={this.handleChange}
							placeholder='Je nieuwe wachtwoord'
							value={this.state.password}
                            minLength= '6'
							required
						/>
						{/* <i className='eye password-icon'></i> */}
						{/* <AiOutlineEye className="eye password-icon" /> */}
					</div>

					<Button className='logbutt' type='submit'>
						Wachtwoord opslaan
					</Button>

				</form>
				{/* <reCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
			</Content>
		</>
	);
  }
}

export default Login;
