import React from "react";

export default function Messages(props) {
  return (
    <>
      <ul className="message-ul">
        <li className="message-li">
          {props.msg.content} 
        </li>

        <span>{props.msg.username} sent at: {props.msg.date}</span>
      </ul>
    </>
  );
}