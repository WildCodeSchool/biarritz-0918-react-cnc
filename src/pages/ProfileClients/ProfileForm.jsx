import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export function ProfileForm({ onSubmit, initialValues }) {
  const { name, username, surname, email, phone } = initialValues;
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input id="name" name="name" type="text" defaultValue={name} />
      </FormGroup>
      <FormGroup>
        <Label for="surname">Surname</Label>
        <Input type="text" name="surname" id="surname" defaultValue={surname} />
      </FormGroup>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" defaultValue={username} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="Email" defaultValue={email} />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone number</Label>
        <Input type="number" name="phone" id="phone" defaultValue={phone} />
      </FormGroup>

      <Button type="submit">Save</Button>
    </Form>
  );
}

export default ProfileForm;
