import React, { Component } from 'react'

export class MessageForm extends Component {
    state = {
        message: '',
        chatroom_id: '',
        user_id: ''
      };

      handleChange = e => {
        this.setState({ title: e.target.value });
      };
    
      //handle submit would handle the fetch post request???

    render() {
        return (
            <>
          <form onSubmit={this.handleSubmit}>
            <label>New Message:</label>
            <br />
            <input
              type="text"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <input type="submit" value="send"/>
          </form>
            </>
        )
    }
}

export default MessageForm

