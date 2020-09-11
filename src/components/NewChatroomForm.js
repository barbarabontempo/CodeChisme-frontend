import React, { Component } from "react";
import axios from "axios";


export default class NewChatroomForm extends Component {
  state = {
    title: "",
    amtPeople: ""
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/chatrooms", this.state)
      .then((response) => {
        this.props.handleNewChat(response);
      });
  };

  render() {
    console.log(this.props)
    return (
      <div className="chat-form">
        <form onSubmit={this.handleSubmit}>
          <label>Chatroom name:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="send" />
        </form>
      </div>
    );
  }
}