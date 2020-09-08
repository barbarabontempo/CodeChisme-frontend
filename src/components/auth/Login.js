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
      <div className="ui card">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="login-form-header">

            <h2 className="ui center aligned icon header">
              <img src="https://icon-library.com/images/cat-icon-png/cat-icon-png-0.jpg"/>
              LogIn
            </h2>
          </div>
          
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
          <button className="ui button teal" tabindex="0" type="submit"> Login </button>
        </form>
       
      </div>
    );
  }
}
