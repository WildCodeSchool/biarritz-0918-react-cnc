import React, { Component } from 'react';

import './App.css';
import Router from "./Router.jsx";
import * as AuthApi from "./Auth.api";

class App extends Component {
  constructor(props) {
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
        <Router login={this.handleLoginSubmit} />
      </div>
    );
  }
}


export default App;