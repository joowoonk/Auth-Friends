import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/login", this.state.creds)
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="passowrd"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}
export default Login;
