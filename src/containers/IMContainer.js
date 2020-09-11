import React from "react";
import axios from "axios";
import ListOfChatrooms from "./ListOfChatrooms";
import ChatroomPage from "./ChatroomPage";
import NewChatroomForm from "../components/NewChatroomForm";
// import { Button, Modal } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import consumer from '../cable'

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
    this.setState(prevState => ({
      chatrooms: prevState.chatrooms.filter((room) => room.id !== id)
    })
    )
  }
  

  render() {
    const {name, username, email, image} = this.props.user
    console.log("object")
    return (
      <>
     <div className="im-container">
          {/* <div className=""> */}
            <div className="sidebar">
            <div className="code-head">
              <img src="https://cdn1.iconfinder.com/data/icons/office-cute-style-vol-4/52/script__code__development__developers_-512.png" alt="icon" className="imIcon"/>
              <h1>CodeChisme</h1>
            </div>
            <div className="profile_info">
              <img src={image} class="profile_image" alt="child"/>
              <h4> Welcome, {username}</h4>
                <small><p> {name}</p></small>
            </div>

               
                
               <NewChatroomForm handleNewChat={this.handleNewChat}/>
               <div className="sidebar-things"> 
                <a> {this.props.loggedInStatus} <span class="fa fa-circle-o online"></span> </a>
               
            
                <a href="#"><i class="fas fa-sliders-h"></i><span className="setting-span">Settings</span></a>
              
                <Link to="/">
                <span className="logout-span" onClick={this.handleLogoutClick}> Logout</span> 
                </Link>
              
                  </div>
            </div>
          {/* </div> */}

          <div className="chatroom-list-container">
            <ListOfChatrooms
              renderChatroom={this.renderChatroom}
              chats={this.state.chatrooms}
              removeChatroom = {this.removeFromChatrooms}
            />
          </div>
          
            <ChatroomPage
              chatroomId={this.state.chatroom_id}
              user={this.props.user}
              currentChatroom={this.state.currentChatroom}
            />
       
          </div>
      </>
    );
  }
}
