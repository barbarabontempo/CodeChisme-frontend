
import React from 'react'
import Chatrooms from "../components/Chatrooms";


export default function ListOfChatrooms(props) {


    
    let handleIncomingChats = () => {
        // console.log("I WANT TO MAKE THIS PRTYYE",props)
      return props.chats.map(chat => <Chatrooms renderChatroom={props.renderChatroom} chatObj={chat}/>)
    }
    
    return (
        <div className="chatroom-list ui grey">
            <h1>CHATROOMS AVAILABLE</h1>
            {handleIncomingChats()}
        </div>
    )
}






