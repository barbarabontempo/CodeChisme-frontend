import React, { Component } from "react";
import Messages from "./Messages";
import MessageForm from "./MessageForm";

export class Chatroom extends Component {

renderingMessages = () => {
   return this.props.chatsmessages.map(message =>  <Messages msg={message}/>)
}   

  render() {

    return (
      <div className="chatroom">
        <h1>CHATROOM</h1>
        {this.props.currentChatroom !== "" ? this.renderingMessages() : null }
        <MessageForm user={this.props.user} chatroomId={this.props.currentChatroom.id} updatesState={this.props.updatesState}/>
      </div>
    );
  }
}

export default Chatroom;
