import React, { Component } from "react";
import Chatroom from "../components/Chatroom";

export class ChatroomPage extends Component {
  state = {
    chatsmessages: []
  };

  updatesState = (newMsg) => {
    this.setState((prevState) => ({
      chatsmessages: [...prevState.chatsmessages, newMsg],
    }));
  };

  chatsMsg = (data) => {
    console.log("this is data from cM", data)
    this.setState({
        chatsmessages: [...data.messages]
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/chatrooms/${this.props.chatroomId}`)
    .then(r => r.json())
    .then(data => this.chatsMsg(data))

  }

  componentDidUpdate(previousProps){
    if (previousProps.chatroomId !== this.props.chatroomId) {
      fetch(`http://localhost:3000/chatrooms/${this.props.chatroomId}`)
      .then(r => r.json())
      .then(data => this.chatsMsg(data))
    } 
  }

  render() {
    console.log("line 40", this.state);
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
