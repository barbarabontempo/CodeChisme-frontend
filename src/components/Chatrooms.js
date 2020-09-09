import React, { Component } from "react";

export class Chatrooms extends Component {
  handleRenderChatroom = () => {
    this.props.renderChatroom(this.props.chatObj.id);
  };

  render() {
    const { title, amtPeople } = this.props.chatObj;
    return (
      <div className="ui middle aligned animated list">
        <div className="item detail" onClick={this.handleRenderChatroom}>
          <img
            className="ui avatar image"
            src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconFeedback-512.png"
            alt="message icon"
          />
          <div className="content ui floating message">
            <div className="header">
              {title}
              <span>
                {" "}
                <small>pop:{amtPeople}</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatrooms;
