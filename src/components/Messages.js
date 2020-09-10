import React from "react";

export default function Messages(props) {
  return (
    <>
      <ul className="message-ul">
        <li className="detail-li">{props.msg.username} sent at: {props.msg.date}</li>
        <li className="message-li">
          {props.msg.content} 
          <br></br>
        </li>

      </ul>
    </>
  );
}