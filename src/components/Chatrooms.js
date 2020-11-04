import React, { Component } from "react";
import axios from "axios";


export class Chatrooms extends Component {
  handleRenderChatroom = () => {
    this.props.renderChatroom(this.props.chatObj.id);
  };

  handleClickRemove = (e) => {

   let msgId = this.props.chatObj.id
    axios.delete(`http://localhost:3000/chatrooms/${msgId}`)
    .then(res => {
      this.props.removeChatroom(res.data.id)
    }
    )
  }
  

  render() {
    const {title} = this.props.chatObj

    return (
         
          <div className="chatRoom-dv bounce-6" onClick={this.handleRenderChatroom}>
          
          <div className="right-corner-label corner-ribbon sticky red"> 
              <h2 onClick={this.handleClickRemove}>
             <span className="fa fa-hand-scissors"
              > </span>
               </h2>      
          </div>
             
            <div  className="chatroom-header">
                  <h1> {title} </h1>
            </div>
        
      </div>
    );
  }
}

export default Chatrooms;
