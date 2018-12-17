import React, { Component } from 'react';
import axios from 'axios';

import ProfileForm from './ProfileForm.jsx';
import styles from './ProfileClient.module.css';
import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';
import * as AuthApi from '../../Auth.api.js';

function getValuesFrom(...inputs) {
   let res = {};
   inputs.forEach((input) => input.name && (res[input.name] = input.value));
   return res;
}

class ProfileClient extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         name: '',
         surname: '',
         email: '',
         phone: '',
         username: '',
         password: '',
         sexe: '',
         city: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
   }
   componentDidMount() {
      AuthApi.getUserId()
         .then((response) =>
            axios.get(AuthApi.SERVER + `/api/user_ids/${response.id}`, {
               headers: { Accept: 'application/json' }
            })
         )
         .then((res) => {
            this.setState({ ...res.data });
            return axios.get(AuthApi.SERVER + `${res.data.city}`, {
               headers: { Accept: 'application/json' }
            });
            //.then((ville) => console.log(ville));
         })
         .then(({ data: city }) => this.setState({ city }));
   }

   handleSubmit(e) {
      e.preventDefault();
      const data = getValuesFrom(...e.target.elements);
      data.phone = parseInt(data.phone);
      AuthApi.getUserId()
         .then((response) =>
            axios.put(AuthApi.SERVER + `/api/user_ids/${response.id}`, data, {
               headers: {
                  Accept: 'application/json',
                  Authorization: 'Bearer ' + AuthApi.getToken()
               }
            })
         )
         .then((res) => this.setState({ ...res.data }));
   }

   render() {
      return (
         <ResponsiveLayout>
            <div className="row">
               <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2 col-xs-8 offset-xs-2">
                  <h3>Mon compte</h3>
                  <ProfileForm initialValues={this.state} onSubmit={this.handleSubmit} />
               </div>
            </div>
         </ResponsiveLayout>
      );
   }
}

export default ProfileClient;
