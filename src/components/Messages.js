import React from "react";

export default function Messages(props) {
  return (
    <>
      <h1>{props.msg.content}</h1>
      <span>{props.msg.username}</span>
    </>
  );
}
