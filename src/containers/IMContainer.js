import React from "react";
import axios from "axios";
import ListOfChatrooms from "./ListOfChatrooms";
import ChatroomPage from "./ChatroomPage";

export default class Imcontainer extends React.Component {
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

  render() {
    return (
      <div>
        <div className="im-container" >
          <div className="sidebar">
            <h1>Dashboard</h1>
            <h1>Status: {this.loggedInStatus}</h1>
            <h2>New Chatroom +</h2>
            <ListOfChatrooms />
            <button onClick={this.handleLogoutClick}>L❤️GOUT </button>
          </div> 
          <div className="chatroom-page-container">
          <ChatroomPage user={this.props.user}/>
          </div>
        </div>
      </div>
    );
  }
}
