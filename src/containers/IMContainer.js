import React from "react";
import axios from "axios";
import ListOfChatrooms from "./ListOfChatrooms";
import ChatroomPage from "./ChatroomPage";
import NewChatroomForm from "../components/NewChatroomForm";
import { Button, Modal } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import consumer from '../cable'

// console.log("from the imCont.", consumer)

consumer.subscriptions.create({
  channel: "UsersChatroomsChannel",
  // chatroom_id: 18,
  user_id: 7
},{
  connected: () => console.log("IMCON connected"),
  received: (data) => console.log("recieved line 18", data),
  disconnected: () => console.log("IM CON disconnected")
}
)

export default class Imcontainer extends React.Component {
  state = {
    chatrooms: [],
    chatroom_id: "",
    currentChatroom: "",
  };

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("log out error", error);
      });
  };

  handleAllChats = () => {
    axios.get("http://localhost:3000/chatrooms").then((resp) => {
      this.setState({
        chatrooms: resp.data,
      });
    });
  };

  componentDidMount() {
    this.handleAllChats();
  }

  handleNewChat = (newchat) => {
    this.setState((prevState) => ({
      chatrooms: [...prevState.chatrooms, newchat.data],
    }));
  };

  renderChatroom = (id) => {
    let foundChat = this.state.chatrooms.find((chatroom) => chatroom.id === id);
    this.setState({
      currentChatroom: foundChat,
      chatroom_id: id,
    });
  };

  removeFromChatrooms = (id) => {
    console.log("youve made it back to imCOntainer", 
    id)
    this.setState(prevState => ({
      chatrooms: prevState.chatrooms.filter((room) => room.id !== id)
    })
    )
  }
  

  render() {
    console.log("line 74", this.props)
    return (
      <div>
        <div className="im-container ui three column grid">
          <div className="">
            <div className="sidebar">
              <h1>CodeChisme</h1>
              <h1>Status: {this.loggedInStatus}</h1>

              <Modal
                trigger={<Button>NEW CHATROOM</Button>}
                header="Create a new chatroom!"
                content={<NewChatroomForm handleNewChat={this.handleNewChat} />}
                actions={[{ key: "done", content: "HUH", positive: false }]}
              />

              <Link to="/">
                <button onClick={this.handleLogoutClick}>L❤️GOUT </button>
              </Link>
            </div>
          </div>

          <div className="chatroom-list-container">
            <ListOfChatrooms
              renderChatroom={this.renderChatroom}
              chats={this.state.chatrooms}
              removeChatroom = {this.removeFromChatrooms}
            />
          </div>
          <div className="chatroom-page-container column">
            <ChatroomPage
              chatroomId={this.state.chatroom_id}
              user={this.props.user}
              currentChatroom={this.state.currentChatroom}
            />
          </div>
        </div>
      </div>
    );
  }
}
