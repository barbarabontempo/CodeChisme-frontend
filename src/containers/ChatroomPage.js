import React, { Component } from "react";
import Chatroom from "../components/Chatroom";

export class ChatroomPage extends Component {
  state = {
    chatsmessages: [],
  };

  updatesState = (newMsg) => {
    this.setState((prevState) => ({
      chatsmessages: [...prevState.chatsmessages, newMsg],
    }));
  };

  chatsMsg = () => {
      // console.log(this.props.currentChatroom)
    this.setState({
        chatsmessages: [...this.props.currentChatroom.messages]
    })
  }

  render() {
    return (
      <div className="chatroom-page">
        <h1>CHATROOM PAGE</h1>
        
        <Chatroom

          user={this.props.user}
          currentChatroom={this.props.currentChatroom}
          updatesState={this.updatesState}
          chatsmessages={this.state.chatsmessages}
        />
      </div>
    );
  }
}

export default ChatroomPage;
