import React, { Component } from "react";

export class MessageForm extends Component {
  state = {
    content: "",
    user_id: "",
    chatroom_id: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      user_id: this.props.user.id,
      chatroom_id: this.props.chatroomId,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      this.setState(({
        content: "",
        user_id: "",
        chatroom_id: ""
      }))
      
  };


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
          className="msg-input"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br></br>
          <input className="msg-btn" type="submit" value="send" />
        </form>
      </>
    );
  }
}

export default MessageForm;
