import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './components/navbar/Navbar.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}


export default App;