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
    const {title, amtPeople} = this.props.chatObj
    
    return (
      <div className="">
          
        <div className="item detail" onClick={this.handleRenderChatroom}>

        
         
          <div className="chatRoom-dv">
          <div onClick={this.handleClickRemove} className="right-corner-label corner-ribbon sticky red"> 
              <i class="fa fa-hand-scissors fa-spin"></i>
                  
          </div>
          <img
            className="avatar-image"
            src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconFeedback-512.png"
            alt="message icon"
          />
          {/* <div className="content"> */}
            <div className="chatroom-header">
                  {title} 
            </div>
        
                <small>pop: {amtPeople} </small>
            
            {/* </div> */}
            </div>
           
            
          </div>
      </div>
    );
  }
}

export default Chatrooms;
