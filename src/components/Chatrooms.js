import React, { Component } from 'react'

export class Chatrooms extends Component {

    handleRenderChatroom = () => {
        this.props.renderChatroom(this.props.chatObj.id)
    }


    render() {
        const {title, amtPeople } = this.props.chatObj
        return (
            <div onClick={this.handleRenderChatroom}>
                <h3>{title} </h3>
                <span>Number of people: {amtPeople} </span>
            </div>
        )
    }
}

export default Chatrooms
