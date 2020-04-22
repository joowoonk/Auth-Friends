import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: "",
    },
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
