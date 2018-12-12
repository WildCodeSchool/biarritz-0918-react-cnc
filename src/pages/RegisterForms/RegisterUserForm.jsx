import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export function RegisterUserForm({ onSubmit }) {
  return (
    <Form horizontal onSubmit={onSubmit}>
      <FormGroup controlId="formHorizontalEmail">
        <Label for="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="Name" />
      </FormGroup>

      <FormGroup>
        <Label for="surname">Surname</Label>
        <Input type="text" name="surname" id="surname" placeholder="Surname" />
      </FormGroup>

      <FormGroup>
        <Label for="sex">Sex</Label>
        <Input type="select" name="sex" id="sex" placeholder="sex">
          <option>Homme</option>
          <option>Femme</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="username" id="username" placeholder="email" />
      </FormGroup>

      <FormGroup>
        <Label for="password">password</Label>
        <Input type="password" name="password" id="password" placeholder="Password" />
      </FormGroup>

      <FormGroup>
        <Label for="phone">Phone number</Label>
        <Input type="tel" name="phone" id="phone" placeholder="Phone" />
      </FormGroup>

      <Button type="submit">Create account</Button>
    </Form>
  );
}

export default RegisterUserForm;

{
  /* <Form horizontal>
<FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>
    Email
  </Col>
  <Col sm={10}>
    <FormControl type="email" placeholder="Email" />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalPassword">
  <Col componentClass={ControlLabel} sm={2}>
    Password
  </Col>
  <Col sm={10}>
    <FormControl type="password" placeholder="Password" />
  </Col>
</FormGroup>

<FormGroup>
  <Col smOffset={2} sm={10}>
    <Checkbox>Remember me</Checkbox>
  </Col>
</FormGroup>

<FormGroup>
  <Col smOffset={2} sm={10}>
    <Button type="submit">Sign in</Button>
  </Col>
</FormGroup>
</Form> */
}
