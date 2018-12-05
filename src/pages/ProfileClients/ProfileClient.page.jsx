import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ProfileClass from './ProfileClass.jsx';
import styles from './ProfileClient.module.css';
import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';

class ProfileClient extends Component {
	constructor() {
		super();
		this.state = {
			userProfile: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}



	//TO DO - CHANGE ID WITH TOKEN OF SESSION
	componentDidMount() {
		/* const { id } = this.props; */
		axios
			//.get(`https://cnc-api.herokuapp.com/user_ids/${id}`)
			.get(`http://127.0.0.1:8000/api/user_ids/1`, { headers: { Accept: 'application/json' } })
			.then((res) => this.setState({ userProfile: res.data }));
	}

	handleChange(event) {
		this.setState({ userProfile: this.props.data });
	}


	handleOnSubmit(event) {
		event.preventDefault();
		axios
			.put(`http://127.0.0.1:8001/api/directories/1`, { headers: { Accept: 'application/json' } })
			.then(() => this.setState({ userProfile: this.props.data }));
	}



	render() {
		return (
			<Fragment>
				<ResponsiveLayout />
				<div className={styles.head}>
					<div className="row">
						<div className="col-lg-8 offset-lg-1">
							<h3>Mon compte</h3>
							<ProfileClass profileclass={this.state.userProfile} onSubmit={this.handleOnSubmit} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ProfileClient;
