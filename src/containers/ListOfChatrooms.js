
import React from 'react'
import Chatrooms from "../components/Chatrooms";


export default function ListOfChatrooms(props) {
    
    let handleIncomingChats = () => {
      return props.chats.map(chat => <Chatrooms renderChatroom={props.renderChatroom} chatObj={chat}/>)
    }
    
    return (
        <div className="chatroom-list">
            <h1>LIST OF CHATROOMS</h1>
            {handleIncomingChats()}
        </div>
    )
}






