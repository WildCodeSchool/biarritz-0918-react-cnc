import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import styles from './Register.module.css';

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

class RegisterUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      surname: null,
      sex: null,
      email: null,
      password: null,
      phone: null,
      formErrors: {
        name: '',
        surname: '',
        sex: '',
        email: '',
        password: '',
        phone: ''
      }
    };
  }

  /*   handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log('SUBMITTINGFirst Name: ${this.state.name}');
    }
  }; */

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'name':
        formErrors.name = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
        break;
      case 'surname':
        formErrors.surname = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : 'invalid email address';
        break;
      case 'phone':
        formErrors.phone = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
        break;
      case 'password':
        formErrors.password = value.length < 6 && value.length > 0 ? 'minimum 6 characters required' : '';
        break;
      case 'Sexe':
        formErrors.sex = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <Form onSubmit={this.props.onSubmit} noValidate>
        <Row form>
          <Col sm={5}>
            <FormGroup>
              <Label for="name">Prenom</Label>
              <Input id="name" name="name" type="text" placeholder="Prenom" noValidate onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col sm={5}>
            <FormGroup>
              <Label for="surname">Nom</Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder="Nom"
                noValidate
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={2}>
            <FormGroup>
              <Label for="sex">Sexe</Label>
              <Input type="select" name="sex" id="sex" onChange={this.handleChange}>
                <option>Homme</option>
                <option>Femme</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col sm={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="username"
                id="username"
                placeholder="email"
                noValidate
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label for="password">Mot de passe</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                noValidate
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label for="phone">Numéro de téléphone</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Numéro de téléphone"
                noValidate
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Button type="submit">Enregistrer</Button>
          <br />
          <small>Déjà inscrit?</small>
        </FormGroup>
      </Form>
    );
  }
}

export default RegisterUserForm;
