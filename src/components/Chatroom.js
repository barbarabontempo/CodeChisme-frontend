import React, { Component } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

export class Chatroom extends Component {
    render() {
        return (
            <>
                <h1>CHATROOM</h1>
                <Messages />
                <MessageInput/>
            </>
        )
    }
}

export default Chatroom