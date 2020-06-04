import React, { Component } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Content from "../components/Content/Content";
// import reCAPTCHA from "react-google-recaptcha";
import Input from "../components/Form/StyledInput";
import Button from "../components/Button";
// import StyledLink from "../components/Link/Link";
import {Link} from 'react-router-dom';
// import { AiOutlineEye } from 'react-icons/ai';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      title: "Inloggen",
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
      <div>
        <Header>
          <Title title={this.state.title} />
        </Header>
        <Content>
          <form onSubmit={this.handleSubmit} className="login">
            <label>E-mail</label>
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="E-mail"
              value={this.state.email}
              required
            />

            <label>Wachtwoord</label>
            <Input
              label="Wachtwoord"
              name="password"
              type="password"
              onChange={this.handleChange}
              placeholder="Password"
              value={this.state.password}
              required
            />
            <i className="eye password-icon"></i>
            {/* <AiOutlineEye className="eye password-icon" /> */}


            <Link className="link pw-forgot" to="/passwordforgot">Wachtwoord vergeten?</Link>

            <Button type="submit">Inloggen</Button>

            <p>Je gaat akkoord met het Privacy Statement van Linden-IT</p>
          </form>
          {/* <reCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
        </Content>
      </div>
    );
  }
}

export default Login;
