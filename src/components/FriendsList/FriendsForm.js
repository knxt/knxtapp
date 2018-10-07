import React, { Component } from 'react';
import axios from 'axios';

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
    };
  }

handleSubmit = event => {
  event.preventDefault();
  const newFriend = {
    name: this.state.name,
    address: this.state.address.toString(),
  };

  this.props.add(newFriend);

  this.setState({
    name: '',
    address: ''
   });
}

handleInputChange = e => {
  this.setState({ [e.target.name]: e.target.value });
}

render() {
  return(
    <div className="FriendForm">
      <div className="form">
      <form onSubmit={this.handleSubmit}>
        <input
          className="name-input"
          onChange={this.handleInputChange}
          placeholder="name"
          value={this.state.name}
          name="name"
         />
         <input
          className="address-input"
          onChange={this.handleInputChange}
          placeholder="0x"
          value={this.state.address}
          name="address"
          />
        <button className="submit" type="submit" onClick={window.location.reload}>+ Friend</button>
        </form>
        </div>
      </div>
    )
  }
}
