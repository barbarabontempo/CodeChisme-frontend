import React, { Component } from "react";
import axios from "axios";


export class Chatrooms extends Component {
  handleRenderChatroom = () => {
    this.props.renderChatroom(this.props.chatObj.id);
  };

  handleClickRemove = (e) => {

    console.log("line11 chatroom", this.props)
   let msgId = this.props.chatObj.id
    axios.delete(`http://localhost:3000/chatrooms/${msgId}`)
    .then(res => {
      this.props.removeChatroom(res.data.id)
    }
    )
  }
  

  render() {
    const {title, amtPeople} = this.props.chatObj
    console.log("line 24chatroom",this.props)
    return (
         
          <div className="chatRoom-dv bounce-6" onClick={this.handleRenderChatroom}>
          
          <div onClick={this.handleClickRemove} className="right-corner-label corner-ribbon sticky red"> 
              <i class="fa fa-hand-scissors"></i>      
          </div>
          
         
         
            <div className="chatroom-header">
                  <h1> {title} </h1>
            </div>
        
      </div>
    );
  }
}

export default Chatrooms;
