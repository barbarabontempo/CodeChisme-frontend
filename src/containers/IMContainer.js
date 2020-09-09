import React from "react";
import axios from "axios";
import ListOfChatrooms from "./ListOfChatrooms";
import ChatroomPage from "./ChatroomPage";
import NewChatroomForm from "../components/NewChatroomForm";
import { Button, Modal } from "semantic-ui-react";

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

  clickToShowModal = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  handleNewChat = (newchat) => {
    this.setState((prevState) => ({
      chatrooms: [...prevState.chatrooms, newchat.data],
    }));
  };

  renderChatroom = (id) => {
    let foundChat = this.state.chatrooms.find((chatroom) => chatroom.id === id);
    this.setState({
      currentChatroom: foundChat,
      chatroom_id: id
    });
  };

  render() {
    return (
      <div>
        <div className="im-container">
          <div className="column"> 
          <div className="sidebar">
            <h1>CodeChisme</h1>
            <h1>Status: {this.loggedInStatus}</h1>

            <Modal
              trigger={<Button>NEW CHATROOM</Button>}
              header="Create a new chatroom!"
              content={<NewChatroomForm handleNewChat={this.handleNewChat} />}
              actions={[{ key: "done", content: "HUH", positive: false }]}
            />

            <button onClick={this.handleLogoutClick}>L❤️GOUT </button>
          </div>
          </div>


          <div className="chatroom-list-container">
            <ListOfChatrooms
              renderChatroom={this.renderChatroom}
              chats={this.state.chatrooms}
            />
          </div>
          <div className="chatroom-page-container">
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
