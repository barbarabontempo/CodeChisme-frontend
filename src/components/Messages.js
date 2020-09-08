import React from 'react'

export default function Messages(props) {
  
console.log("our message", props)
    return (
        <>
            <h1>{props.msg.content}</h1>
        </>
    )
}


