import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ProfileItem extends Component {
    
    constructor(props){
        super(props);
    }

  render() {
    return (
        <Form>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input type="name" name="name" id="name" value={this.props.name} />
        </FormGroup>
        <FormGroup>
          <Label for="surname">Surname</Label>
          <Input type="name" name="surname" id="surname" value={this.props.surname} />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="name" name="username" id="username" value={this.props.username} />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" value={this.props.mail} />
        </FormGroup>        
        <FormGroup>
          <Label for="phone">Phone number</Label>
          <Input type="text" name="phone" id="phone" value={this.props.phone} />
        </FormGroup>
          
        <Button>Submit</Button>
      </Form>

    );
  }
}

export default ProfileItem;