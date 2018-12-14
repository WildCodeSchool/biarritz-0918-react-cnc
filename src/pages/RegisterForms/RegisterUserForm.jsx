import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

function checkEmail(value) {
  const emailRegex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return emailRegex.test(value) ? undefined : `invalid email address`;
}

function checkPhone(value) {
  const phoneRegex = RegExp(/^(0|(00|\+)33)[67][0-9]{8}$/);
  return phoneRegex.test(value) ? undefined : `invalid phone number`;
}

function minLenOf(len) {
  return (value) => (value.length < len ? `minimum ${len} characters required` : undefined);
}

const minLenOf3 = minLenOf(3);
const minLenOf6 = minLenOf(6);
const minLenOf10 = minLenOf(10);

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
      },
      isError: false
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = {
      name: '',
      surname: '',
      sex: '',
      email: '',
      password: '',
      phone: ''
    };
    let isError = false;
    formErrors.name = name === 'name' && minLenOf3(value);
    formErrors.surname = name === 'surname' && minLenOf3(value);
    formErrors.phone = name === 'phone' && (minLenOf3(value) || checkPhone(value));
    formErrors.email = name === 'username' && (minLenOf6(value) || checkEmail(value));
    formErrors.password = name === 'password' && minLenOf6(value);
    formErrors.sex = name === 'sex' && minLenOf3(value);
    for (let key in formErrors) {
      if (formErrors[key]) {
        isError = true;
        break;
      }
    }

    this.setState({ isError, formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors, isError } = this.state;
    return (
      <Form onSubmit={this.props.onSubmit} noValidate>
        <Row form>
          <Col sm={5}>
            <FormGroup>
              <Label for="name">Prenom</Label>
              <Input id="name" name="name" type="text" placeholder="Prenom" noValidate onChange={this.handleChange} />
              {formErrors.name && <span className="errorMessage"> {formErrors.name}</span>}
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
              {formErrors.surname && <span className="errorMessage"> {formErrors.surname}</span>}
            </FormGroup>
          </Col>
          <Col sm={2}>
            <FormGroup>
              <Label for="sex">Sexe</Label>
              <Input type="select" name="sex" id="sex" onChange={this.handleChange}>
                <option>Homme</option>
                <option>Femme</option>
              </Input>
              {formErrors.sex && <span className="errorMessage"> {formErrors.sex}</span>}
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col sm={4}>
            <FormGroup>
              <Label for="username">Email</Label>
              <Input
                type="email"
                name="username"
                id="email"
                placeholder="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email && <span className="errorMessage"> {formErrors.email}</span>}
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
              {formErrors.password && <span className="errorMessage"> {formErrors.password}</span>}
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
              {formErrors.phone && <span className="errorMessage"> {formErrors.phone}</span>}
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Button type="submit" disabled={isError}>
            Enregistrer
          </Button>
          <br />
          <Link to="/login">
            <small>Déjà inscrit?</small>
          </Link>
        </FormGroup>
      </Form>
    );
  }
}

export default RegisterUserForm;
