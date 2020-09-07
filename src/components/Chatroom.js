import React, { Component } from 'react'
import Messages from './Messages'
import MessageInput from './MessageForm'

export class Chatroom extends Component {
    render() {
        return (
            <div className="chatroom">
                <h1>CHATROOM</h1>
                <Messages />
                <MessageInput user={this.props.user}/>
            </div>
        )
    }
}

export default Chatroom