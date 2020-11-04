import React, { Component } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export class MessageForm extends Component {
  state = {
    content: "",
    user_id: "",
    chatroom_id: "",
    showEmojis: false
  };

  showEmojis = e => {
    this.setState(
      {
        showEmojis: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };

  closeMenu = e => {
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false
        },
        () => document.removeEventListener("click", this.closeMenu)
      );
    }
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      user_id: this.props.user.id,
      chatroom_id: this.props.chatroomId,
    });
  };

  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      content: this.state.content + emoji
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
    }).then((r) => r.json());
    this.setState({
      content: "",
      user_id: "",
      chatroom_id: "",
    });
  };

  render() {
    return (
      <>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input
            className="msg-input"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Type....."
          />
          <br></br>
          <div> 
      
      {this.state.showEmojis ? (
        <span style={styles.emojiPicker} ref={el => (this.emojiPicker = el)}>
          <Picker
            onSelect={this.addEmoji}
            emojiTooltip={true}
            title="emoji"
          />
        </span>
      ) : (
        <p style={styles.getEmojiButton} onClick={this.showEmojis}>
          {String.fromCodePoint(0x1f60a)}
        </p>
      )}
    </div>
          <button className="msg-btn" type="submit" value="send">
            <i className="far fa-paper-plane fa-2x"></i>
          </button>
        </form>
       

      </>

    );
  }
}

export default MessageForm;


const styles = {

  getEmojiButton: {
    position: "absolute",
    right: "16px",
    bottom: "0",
    width: "50px",
    backgroundColor: "transparent",
    cursor: "pointer"
  },
  emojiPicker: {
    position: "absolute",
    bottom: 10,
    right: 0,
    cssFloat: "right",
    marginLeft: "200px"
  }
};
