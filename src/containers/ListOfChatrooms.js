import React from "react";
import Chatrooms from "../components/Chatrooms";

export default function ListOfChatrooms(props) {
  let handleIncomingChats = () => {
    return props.chats.map((chat) => (
      <Chatrooms
        key={chat.id}
        renderChatroom={props.renderChatroom}
        chatObj={chat}
        removeChatroom = {props.removeChatroom}
      />
    ));
  };

  return (
    <>
      <h1>Join a chatroom!</h1>
      <form className="search-form">
      <input
          className="search-input"
            type="text"
            value=""
            placeholder=" Search Chats"
          />
      </form>
      {handleIncomingChats()}
    </>
  );
}
