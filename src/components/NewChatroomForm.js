import React, { Component } from "react";
import axios from "axios";


export default class NewChatroomForm extends Component {
  state = {
    title: "",
    amtPeople: ""
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/chatrooms", this.state)
      .then((response) => {
        this.props.handleNewChat(response);
      });
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Chatroom name:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="send" />
        </form>
      </div>
    );
  }
}

// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// export default function NewChatroomForm({handleNewChat}) {

//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState('');
//   const [amtPeople, setAmtPeople] = useState(1);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newChatObj = {title: title, amtPeople: amtPeople};

//     axios
//       .post("http://localhost:3000/chatrooms", newChatObj)
//       .then((response) => {
//         handleNewChat(response);
//       });
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>New Chatroom</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <label>Chatroom name:</label>
//             <br />
//             <input
//               type="text"
//               value={title}
//               onChange={handleChange}
//             />
//             {/* <Button type="submit" value="send" /> */}
//           </form>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" type="submit">
//               Create Chatroom
//             </Button>
//           </Modal.Footer>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }