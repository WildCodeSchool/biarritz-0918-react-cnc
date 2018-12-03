import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './components/navbar/Navbar.jsx';
import * as AuthApi from './Auth.api';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
      isLoginVisible: true
    }
  }

  handleLoginSubmit(credentials){
    AuthApi.postCredentials(credentials)
      .then(() =>
      this.setState({
        isAuthenticated: true,
        isLoginVisible: false
      }))
  }

  render() {
    return (
      <div className="App">
        <Navbar handleLoginSubmit={this.handleLoginSubmit} />
      </div>
    );
  }
}


export default App;