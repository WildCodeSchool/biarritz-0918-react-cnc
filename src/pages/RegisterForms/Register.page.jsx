import React, { Component, Fragment } from 'react';
import axios from 'axios';

import RegisterUserForm from './RegisterUserForm.jsx';
import styles from './Register.module.css';
import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';

function getValuesFrom(...inputs) {
  let res = {};
  inputs.forEach((input) => input.name && (res[input.name] = input.value));
  return res;
}

class Register extends Component {
  constructor() {
    super();
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

  handleSubmit(e) {
    e.preventDefault();
    const data = getValuesFrom(...e.target.elements);
    data.phone = parseInt(data.phone);
    axios
      .post(`http://127.0.0.1:8000/register`, data, {
        headers: {
          Accept: 'application/json'
        }
      })
      .then((res) => this.setState({ userProfile: res.data }));
  }

  render() {
    return (
      <Fragment>
        <ResponsiveLayout />
        <div className={styles.head}>
          <div className="row">
            <div className="offset-lg-2 offset-xs-2 col-xs-8 col-lg-8">
              <h3>Formulaire d'enregistrement</h3>
              <RegisterUserForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
