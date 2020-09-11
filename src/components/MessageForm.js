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
        <form className= "message-form" onSubmit={this.handleSubmit}>
          <input
          className="msg-input"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Type....."
          />
          <br></br>
          <button className="msg-btn" type="submit" value="send">
          <i class="far fa-paper-plane fa-2x"></i>
            </button>
          
        </form>
      </>
    );
  }
}

export default MessageForm;
