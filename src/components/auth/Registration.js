import React, { Component } from "react";
import axios from "axios";


export default class Registration extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    image: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData()
    form.append("image", this.state.image)
    form.append("name", this.state.name)
    form.append("username", this.state.username)
    form.append("email", this.state.email)
    form.append("password", this.state.password)
    form.append("password_confirmation", this.state.password_confirmation)
    axios
      .post(
        "http://localhost:3000/registrations",
         form,
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
      <div className="form-container sign-up-container">
        <form className="form-auth" onSubmit={this.handleSubmit}>
          <h3 className="form-title">Chiśme Up</h3>

          <input
          className="input-auth"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

          <input
          className="input-auth"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
          className="input-auth"
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
          className="input-auth"
            type="file"
            name="image"
            placeholder="image url"
            value={this.state.image}
            onChange={this.handleChange}
            required
          />

          <input
          className="input-auth"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
          className="input-auth"
            type="password"
            name="password_confirmation"
            placeholder="password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button className="form-button" type="submit">
            {" "}
            Register{" "}
          </button>
        </form>
      </div>
    );
  }
}
