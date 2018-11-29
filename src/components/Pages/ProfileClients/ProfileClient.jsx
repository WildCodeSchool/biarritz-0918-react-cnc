import React, { Component } from 'react';
import axios from "axios";

import ProfileClass from './ProfileClass.jsx';
import styles from './ProfileClient.module.css';
import { userprofile } from './dummyData';

class ProfileClient extends Component {

  constructor(){
    super();
    this.state = {
      userprofile: []
    }
  }

    componentDidMount(){
    this.setState({userprofile});
  } 


  // TO DO - MODIFY when login will be ok
  // componentDidMount(){
  //   /* const { id } = this.props; */
  //   axios
  //     //.get(`https://cnc-api.herokuapp.com/user_ids/${id}`)
  //     .get(`https://cnc-api.herokuapp.com/user_ids/18`, { headers: { Accept: "application/json"}})
  //     .then(res => this.setState({ userprofile: [res.data] }));
  // }

  //TO TEST AND UTILIZE WHEN API WILL BE OK
  // handleOnSubmit(e) {
  //   e.preventDefault();
  //   axios
  //     .put(`http://127.0.0.1:8001/api/directories/${id}.json`, {
  //       name
  //     })
  //     .then(() => this.setState({ TO DO }));
  // }


  render() {
    console.log(this.state)
    return (
      
      <div className={styles.head}>        
        <div className="row">
          <div className="col-lg-8">
            <h3>Mon compte</h3>
            <ProfileClass profileclass={this.state.userprofile} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClient;