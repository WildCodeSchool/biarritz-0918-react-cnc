/* import React from "react";
import logo from '../../../clic.png';
import styles from './ProfileClient.module.css';



const ProfileClient = () => {

    return (

        <div className={styles.head}>
             <div className="row">
                <div className="col-lg-12">
                    <p>TEST Component called ProfileClient situated in components/Pages/ProfileClient.js</p>
                    <img src={logo} alt="logo" />    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p>TEST Component called ProfileClient situated in components/Pages/ProfileClient.js</p>
                </div> 
                <div className="col-lg-6">
                    <p>TEST Component called ProfileClient situated in components/Pages/ProfileClient.js</p>
                </div>      
            </div>
        </div>
    );
};

export default ProfileClient; */

import React, { Component } from 'react';
import uuid from 'uuid';
import ProfileClass from './ProfileClass.js';
import AddProfile from './AddProfile.js';
import styles from './ProfileClient.module.css';

import logo from '../../../clic.png';

class ProfileClient extends Component {

  constructor(){
    super();
    this.state = {
      userprofile: []
    }
  }

  componentWillMount(){
    this.setState({
      userprofile: [
        {
          id: uuid.v4(),
          name :'Nicola',
          category: 'developer 1',
          profile:'test1'
        },
        {
          id: uuid.v4(),
          name :'Vianney',
          category: 'developer 2',
          profile:'test2'
        },
        {
          id: uuid.v4(),
          name :'Basile',
          category: 'developer 3',
          profile:'test3'
        },
        {
          id: uuid.v4(),
          name :'Roland',
          category: 'developer 4',
          profile:'test4'
        }
      ]});
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
          <div className="col-lg-6">
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