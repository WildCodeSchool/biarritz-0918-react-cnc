import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ProfileForm from './ProfileForm.jsx';
import styles from './ProfileClient.module.css';
import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';
import * as AuthApi from '../../Auth.api.js';

function getValuesFrom(...inputs) {
  let res = {};
  inputs.forEach((input) => input.name && (res[input.name] = input.value));
  return res;
}

class ProfileClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        id: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        username: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    AuthApi.getUserId()
      .then((response) =>
        axios.get(`http://127.0.0.1:8000/api/user_ids/${response}`, { headers: { Accept: 'application/json' } })
      )
      .then((res) => this.setState({ userProfile: res.data }));
  }

  // componentDidUpdate() {
  //   const { userId } = this.props;
  //   axios
  //     .get(`http://127.0.0.1:8000/api/user_ids/${userId}`, { headers: { Accept: 'application/json' } })
  //     .then((res) => this.setState({ userProfile: res.data }));
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.userId !== nextProps.userId;
  // }

  handleSubmit(e) {
    e.preventDefault();
    const data = getValuesFrom(...e.target.elements);
    data.phone = parseInt(data.phone);
    AuthApi.getUserId()
      .then((response) =>
        axios.put(`http://127.0.0.1:8000/api/user_ids/${response}`, data, {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + AuthApi.getToken()
          }
        })
      )
      .then((res) => this.setState({ userProfile: res.data }));
  }

  render() {
    return (
      <Fragment>
        <ResponsiveLayout />
        <div className={styles.head}>
          <div className="row">
            <div className="col-lg-8 offset-lg-1">
              <h3>Mon compte</h3>
              <ProfileForm initialValues={this.state.userProfile} onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProfileClient;
