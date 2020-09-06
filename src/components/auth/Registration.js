import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/registrations",
        { user: this.state },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
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
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
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
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit"> Register </button>
        </form>
      </div>
    );
  }
}
