import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export function ProfileForm({ onSubmit, initialValues }) {
  const { name, username, surname, city, phone, password, sex } = initialValues;
  return (
    <Form onSubmit={onSubmit}>
      <Row form>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="name">Prenom</Label>
            <Input id="name" name="name" type="text" defaultValue={name} />
          </FormGroup>
        </Col>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="surname">Nom</Label>
            <Input
              type="text"
              name="surname"
              id="surname"
              defaultValue={surname}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              defaultValue={username}
              readonly="readonly"
            />
          </FormGroup>
        </Col>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              id="password"
              defaultValue={password}
              readonly="readonly"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="sex">Sexe</Label>
            <Input
              type="text"
              name="sex"
              id="sex"
              defaultValue={sex}
              readonly="readonly"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="phone">Numéro de téléphone</Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              defaultValue={phone}
              readonly="readonly"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col sm={6} xs={{ size: 10, offset: 1 }}>
          <FormGroup>
            <Label for="city">Ville</Label>
            <Input
              type="text"
              name="cityName"
              id="city"
              defaultValue={city.name}
              readonly="readonly"
            />
          </FormGroup>
        </Col>
      </Row>

      <Button type="submit">Save</Button>
    </Form>
  );
}

export default ProfileForm;
