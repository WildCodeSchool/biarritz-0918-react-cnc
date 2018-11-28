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

  /* componentDidMount(){
    this.setState({
      userprofile: [
        {
          username: "user2@example.com",
          roles: [
            "ROLE_USER"
          ],
          password: "$2y$13$kSc/BLuz3PHmfHGwWog7aOP0mmBnjL7fujCZZbV.rIireKC0jpKF2",
          salt: null,
          id: 18,
          name: "Jaleel",
          surname: "user2",
          email: "user2@example.com",
          phone: 102261126,
          rdvs: []
        },
        {
          username: "user2@example.com",
          roles: [
            "ROLE_USER"
          ],
          password: "$2y$13$kSc/BLuz3PHmfHGwWog7aOP0mmBnjL7fujCZZbV.rIireKC0jpKF2",
          salt: null,
          id: 19,
          name: "Jaleel",
          surname: "user2",
          email: "user2@example.com",
          phone: 102261126,
          rdvs: []
        },
        {
          username: "user2@example.com",
          roles: [
            "ROLE_USER"
          ],
          password: "$2y$13$kSc/BLuz3PHmfHGwWog7aOP0mmBnjL7fujCZZbV.rIireKC0jpKF2",
          salt: null,
          id: 20,
          name: "Jaleel",
          surname: "user2",
          email: "user2@example.com",
          phone: 102261126,
          rdvs: []
        },
        {
          username: "user2@example.com",
          roles: [
            "ROLE_USER"
          ],
          password: "$2y$13$kSc/BLuz3PHmfHGwWog7aOP0mmBnjL7fujCZZbV.rIireKC0jpKF2",
          salt: null,
          id: 21,
          name: "Jaleel",
          surname: "user2",
          email: "user2@example.com",
          phone: 102261126,
          rdvs: []
        }
      ]});
  } */

  componentDidMount(){
    /* const { id } = this.props; */
    axios
      //.get(`https://cnc-api.herokuapp.com/user_ids/${id}.json`)
      .get(`https://cnc-api.herokuapp.com/user_ids`, { headers: { Accept: "application/json"}})
      .then(res => this.setState({ userprofile: res.data }));
  }



  handleADDProfile(userprofile){
    //console.log(userprofile);
    let profile = this.state.userprofile;
    profile.push(userprofile);
    this.setState({userprofile : profile});
  }

  render() {
    return (
      
      <div className={styles.head}>        
        <div className="row">
          <div className="col-lg-12">
            <h3>Punto entrata ProfileClient.js</h3>
            <AddProfile AddProfile={this.handleADDProfile.bind(this)} />
            <ProfileClass profileclass={this.state.userprofile} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClient;