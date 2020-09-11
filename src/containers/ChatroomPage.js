import React, { Component } from "react";
import Chatroom from "../components/Chatroom";
import consumer from "../cable";

export class ChatroomPage extends Component {

  state = {
    messagesInChat: [],
    username: "",
    chatroom: "",
  };

  updatesState = (newMsg) => {
    this.setState((prevState) => ({
      messagesInChat: [newMsg, ...prevState.messagesInChat],
    }));
  };

  chatsMsg = (data) => {
    this.setState({
      messagesInChat: [...data.messages],
      username: this.props.user.username,
      chatroom: data.title,
    });
  };

  getSubscription(){
    if (this.subscription){
console.log("UNSUBSCRIBING", this.state.username)
      this.subscription.unsubscribe()
    }
    this.subscription = consumer.subscriptions.create(
      {
        channel: "ChatroomChannel",
        username: this.state.username,
        chatroomName: this.state.chatroom
      },
      {
        connected: () => console.log("CP connected"),
        received: (data) => this.updatesState(data),
        disconnected: () => console.log("CP disconnected")
      }
    );
  
  }

  componentDidMount() {
    fetch(`http://localhost:3000/chatrooms/${this.props.chatroomId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.messages) {
          this.chatsMsg(data);
          this.getSubscription()
        }
      });
  }

  componentDidUpdate(previousProps) {
    if (previousProps.chatroomId !== this.props.chatroomId) {
      fetch(`http://localhost:3000/chatrooms/${this.props.chatroomId}`)
        .then((r) => r.json())
        .then((data) => {
          this.chatsMsg(data);
          this.getSubscription()
        });
    }
  }


  componentWillUnmount(){
    this.subscription.unsubscribe()
  }

  render() {
    console.log("UNSUBSCRIBING", this.subscription)
    return (
      <div className="chatroom-page">
        

        <Chatroom
          user={this.props.user}
          currentChatroom={this.props.currentChatroom}
          updatesState={this.updatesState}
          messagesInChat={this.state.messagesInChat}
        />
      </div>
    );
  }
}

export default ChatroomPage;
