import React, { Component } from "react";
import Chatroom from "../components/Chatroom";
import consumer from "../cable"

console.log("this is the consumet", consumer)
consumer.subscriptions.create({
  channel: "ChatroomChannel",
  username:'neta',
  chatroomName:"barbs",
},{
  connected: () => console.log("connected"),
  
  received: (data) => console.log("recieved", data),
  disconnected: () => console.log("disconnected")
})

console.log("this is the consumer", consumer.subscriptions);


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
    this.setState({
        chatsmessages: [...data.messages]
    })
  }

  componentDidMount(){

    fetch(`http://localhost:3000/chatrooms/${this.props.chatroomId}`)
    .then(r => r.json())
    .then(data => {
        console.log(data)
      if (data.messages){
      this.chatsMsg(data)
      }
    })

  }

  componentDidUpdate(previousProps){
    
    if (previousProps.chatroomId !== this.props.chatroomId) {
      fetch(`http://localhost:3000/chatrooms/${this.props.chatroomId}`)
      .then(r => r.json())
      .then(data => {
        this.chatsMsg(data)})
    } 
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
