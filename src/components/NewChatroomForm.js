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

      this.setState(({
       title: "",
       amtPeople: ""
      }))
  };

  render() {
    // console.log(this.props)
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
      
         
          <input
          className="chat-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Create New Chatroom!"
          />
          <button className="chat-btn" type="submit" value="send">
           <i className="far fa-paper-plane fa-2x"></i>
          </button>
     
        </form>
    );
  }
}