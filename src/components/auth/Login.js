import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  state = {
    username: "",
    password: "",
    loginErrors: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/sessions",
        { user: this.state },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
       })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit"> Login </button>
        </form>
      </div>
    );
  }
}
