import React, { Component } from 'react';

class AddProfile extends Component {

    constructor(){
        super();
        this.state ={
            newProfile:{}
        }
    }
 
/*  Example données:
    {
          username: "user2@example.com",
          roles: [
            "ROLE_USER"
          ],
          password: "$2y$13$kSc/BLuz3PHmfHGwWog7aOP0mmBnjL7fujCZZbV.rIireKC0jpKF2",
          salt: null,
          id: 18,
          name: "Jaleel",
          surname: "user2",
          email: "user2@example.com",
          phone: 102261126,
          rdvs: []
    }, */


    handleSubmit(e){
        if(this.refs.id.value === ''){
            alert('id is required');
        }else{
            this.setState({newProfile:{
                name: this.refs.name.value,
                username: this.refs.username.value,
                id: this.refs.id.value,
                surname: this.refs.surname.value,
                email: this.refs.email.value,
                phone: this.refs.phone.value
            }}, function(){
               this.props.AddProfile(this.state.newProfile);
            });
        }
        e.preventDefault();
    }

    render() {
        return (
        <div>
            <hr />
        </div>
        );
    }
}

export default AddProfile;