import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ProfileForm extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}


	render() {
		return (
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label for="Name">Name</Label>
					<Input type="name" name="name" id="name" defaultValue={this.props.profileForm.name} />
				</FormGroup>
				<FormGroup>
					<Label for="surname">Surname</Label>
					<Input type="name" name="surname" id="surname" defaultValue={this.props.profileForm.surname} />
				</FormGroup>
				<FormGroup>
					<Label for="username">Username</Label>
					<Input type="name" name="username" id="username" defaultValue={this.props.profileForm.username} />
				</FormGroup>
				<FormGroup>
					<Label for="Email">Email</Label>
					<Input type="email" name="email" id="Email" defaultValue={this.props.profileForm.email} />
				</FormGroup>
				<FormGroup onSubmit={this.handleOnSubmit}>
					<Label for="phone">Phone number</Label>
					<Input type="text" name="phone" id="phone" defaultValue={this.props.profileForm.phone} />
				</FormGroup>

				<Button type="submit">Save Modifications</Button>
			</Form>
		);
	}
}

export default ProfileForm;
