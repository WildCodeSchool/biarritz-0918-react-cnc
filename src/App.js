import React, { Component } from 'react';

import './App.css';
import Router from "./Router.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isAuthenticated: false,
    //   isLoginVisible: true
    // }
  }

  // handleLoginSubmit(credentials){
  //   AuthApi.postCredentials(credentials)
  //     .then(() =>
  //     this.setState({
  //       isAuthenticated: true,
  //       isLoginVisible: false
  //     }))
  // }

  render() {
    return (
      <div className="App">
        {/* <Navbar handleLoginSubmit={this.handleLoginSubmit} /> */}
        <Router />
      </div>
    );
  }
}


export default App;