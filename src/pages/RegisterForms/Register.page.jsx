import React, { Component, Fragment } from 'react';
import axios from 'axios';

import RegisterUserForm from './RegisterUserForm.jsx';
import styles from './Register.module.css';
import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';
import * as AuthApi from '../../Auth.api.js';
import { debug } from 'util';

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

  /*  handleUserInput(e) {
    debugger;
    const name = getValuesFrom(...e.target.elements);
    const value = getValuesFrom(...e.target.elements);
    // this.setState({ [name]: value }, () => {
    //   this.validateField(name, value);
    // });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      { formErrors: fieldValidationErrors, emailValid: emailValid, passwordValid: passwordValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  } */

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
