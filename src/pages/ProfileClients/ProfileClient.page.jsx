import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ProfileClass from './ProfileClass.jsx';
import styles from './ProfileClient.module.css';
import { userprofile } from './dummyData';
import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';

class ProfileClient extends Component {
	constructor() {
		super();
		this.state = {
			userprofile: []
		};
	}

	//componentDidMount with DUMMY DATA test
	/* 	componentDidMount() {
		this.setState({ userprofile });
	} */

	//TO DO - CHANGE ID WITH TOKEN OF SESSION
	componentDidMount() {
		/* const { id } = this.props; */
		axios
			//.get(`https://cnc-api.herokuapp.com/user_ids/${id}`)
			.get(`http://127.0.0.1:8000/api/user_ids/1`, { headers: { Accept: 'application/json' } })
			.then((res) => this.setState({ userprofile: [ res.data ] }));
	}

	//TO TEST AND UTILIZE WHEN API WILL BE OK
	// handleOnSubmit(e) {
	//   e.preventDefault();
	//   axios
	//     .put(`http://127.0.0.1:8001/api/directories/${id}.json`, {
	//       name
	//     })
	//     .then(() => this.setState({ TO DO }));
	// }

	render() {
		return (
			<Fragment>
				<ResponsiveLayout />
				<div className={styles.head}>
					<div className="row">
						<div className="col-lg-8">
							<h3>Mon compte</h3>
							<ProfileClass profileclass={this.state.userprofile} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ProfileClient;
