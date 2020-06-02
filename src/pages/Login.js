import React, { Component } from "react";
import Title from "../components/Title/Title";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
        <Header>{/* <Title name={`Login`} /> */}</Header>
        <Content>
          <form onSubmit={this.handleSubmit} className="login">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <button type="submit">Login</button>
          </form>
        </Content>
      </div>
    );
  }
}

export default Login;
