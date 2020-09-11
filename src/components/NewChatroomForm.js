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
      <form onSubmit={this.handleSubmit}>
        <div className="chat-form">
          <label className="create-chat">create a chatroom!</label>
          <br />
          <input
          className="chat-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input className="chat-btn" type="submit" value="send" />
      </div>
        </form>
    );
  }
}