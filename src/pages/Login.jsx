import React, { Component } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Content from "../components/Content/Content";
// import reCAPTCHA from "react-google-recaptcha";
import Input from "../components/Form/StyledInput";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      title: "Login",
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

            <label>Password</label>
            <Input
              label="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
              placeholder="Password"
              value={this.state.password}
              required
            />

            <a href="/passwordforgot">Wachtwoord vergeten?</a>

            <button type="submit">Login</button>

            <p>Je gaat akkoord met het Privacy Statement van Linden-IT</p>
          </form>
          {/* <reCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
        </Content>
      </div>
    );
  }
}

export default Login;
