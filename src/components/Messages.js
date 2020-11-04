import React from "react";

export default function Messages(props) {
  console.log("line 4 in messages", props)
  
  return (
    <>

        <div className ={ props.user.id === props.msg.user_id ? "chatMessage-right": "chatMessage-left"}>
          <span className="chatMsg-avatarFrame">
            <img className="da-img" src={props.msg.user.image} alt="user"  />
          </span>
          <p className= { props.user.id === props.msg.user_id ? "msgCon-right": "msgCon-left"}>
            {props.msg.content}
          </p>
          <li className={"detail-li"}>{props.msg.username} sent at: {props.msg.date}</li>

        </div>




      {/* <ul className="message-ul "> */}
        {/* <li className={"detail-li"}>{props.msg.username} sent at: {props.msg.date}</li>
        <li className="message-li">
          {props.msg.content} 
          <br></br>
        </li> */}

      {/* </ul> */}
    </>
  );
}