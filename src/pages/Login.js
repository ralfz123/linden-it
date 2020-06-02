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
  }

  handleSubmit(event) {
    const { email, password } = this.state;
  }

  render() {
    return (
      <div>
        <Header>{/* <Title name={`Login`} /> */}</Header>
        <Content>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
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
