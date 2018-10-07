import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
import Receipt from './components/Receipt/Receipt.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
