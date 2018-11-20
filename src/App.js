import React, { Component } from 'react';
import logo from './clic.png';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar.jsx';
import Input from './Input.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input />
        </header>
      </div>
    );
  }
}

export default App;
