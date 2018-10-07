import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
import Receipt from './components/Receipt/Receipt.js';
import FriendsList from './components/FriendsList/FriendsList.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(e => { console.log(e) });
  }

  addFriend = newFriend => {
    axios
      .post("http://localhost:3333/friends", newFriend)
      .then(res => this.setState({ friends: res.data }, this.props.history.push('/')))
      .catch(e => { console.log(e) })
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:3333/friends/${id}`)
      .then(res => {this.setState({ id: res.data })
    })
      .catch(e => { console.log(e) })
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} AddFriend={this.addFriend} DeleteFriend={this.deleteFriend}/>
      </div>
    );
  }
}

export default App;
