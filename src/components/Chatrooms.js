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
      <div className="ui middle aligned animated list">
        <div className="item detail" onClick={this.handleRenderChatroom}>
         
          <button className="chatRoom-dv">
          <img
            className="avatar-image"
            src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconFeedback-512.png"
            alt="message icon"
          />
          {/* <div className="content"> */}
            <div className="header">
              {title} 
             
              <span>
             
                <small>pop: {amtPeople} </small>
              </span>

              
              <div className="right-corner-label  sticky red"> 
                <a onClick={this.handleClickRemove}>
                   
                        
                        {/* <i className= "trash alternate outline icon">  </i> */}
                  </a>
              </div>
             
              </div>
            {/* </div> */}
            </button>
           
            
          </div>
      </div>
    );
  }
}

export default Chatrooms;
