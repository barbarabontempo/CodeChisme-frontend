import React, { Component } from "react";
import Messages from "./Messages";
import MessageForm from "./MessageForm";

export class Chatroom extends Component {
  renderingMessages = () => {
    return this.props.messagesInChat.map((message) => (
      <Messages key={message.id} msg={message} user={this.props.user} />
    ));
  };

  render() {
    return (
      <div className="chatroom">
        <h3>Current room: {this.props.currentChatroom.title}</h3>
        <div className="chats-messages"> 
        {this.props.currentChatroom !== "" ? this.renderingMessages() : null}
        </div>
        
        {/* <div className="message-form"> */}
        
        <MessageForm
        className="chat-footer"
        user={this.props.user}
        chatroomId={this.props.currentChatroom.id}
        updatesState={this.props.updatesState}
        />
        {/* </div>f */}
      </div>
    );
  }
}

export default Chatroom;
