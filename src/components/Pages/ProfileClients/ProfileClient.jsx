import React, { Component } from 'react';
import uuid from 'uuid';
import axios from "axios";

import ProfileClass from './ProfileClass.jsx';
import AddProfile from './AddProfile.jsx';
import styles from './ProfileClient.module.css';
import logo from '../../../clic.png';

class ProfileClient extends Component {

  constructor(){
    super();
    this.state = {
      userprofile: []
    }
  }

  //Get One Users
  componentDidMount(){
    /* const { id } = this.props; */
    axios
      //.get(`https://cnc-api.herokuapp.com/user_ids/${id}`)
      .get(`https://cnc-api.herokuapp.com/user_ids/18`, { headers: { Accept: "application/json"}})
      .then(res => this.setState({ userprofile: [res.data] }));
  }



    handleADDProfile(userprofile){
    let profile = this.state.userprofile;
    profile.push(userprofile);
    this.setState({userprofile : profile});
  } 

  render() {
    return (
      
      <div className={styles.head}>        
        <div className="row">
          <div className="col-lg-8">
            <h3>Mon compte</h3>
            <AddProfile AddProfile={this.handleADDProfile.bind(this)} />
            <ProfileClass profileclass={this.state.userprofile} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClient;