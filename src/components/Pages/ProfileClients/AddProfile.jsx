import React, { Component } from 'react';

class AddProfile extends Component {

    constructor(){
        super();
        this.state ={
            newProfile:{}
        }
    }

/*     static defaultProps ={
        categories : ['Web Design', 'Web Development','Mobile Development']
    } */  

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
            alert('Username is required');
        }else{
            this.setState({newProfile:{
                name: this.refs.name.value,
                username: this.refs.username.value,
                id: this.refs.id.value,
                surname: this.refs.surname.value,
                email: this.refs.email.value,
                phone: this.refs.phone.value
            }}, function(){
               // console.log(this.state.newProfile);
               // this.props.AddProfile(this.state.newProfile);
               //debugger; 
               this.props.AddProfile(this.state.newProfile);
            });
        }
        e.preventDefault();
    }

    render() {
        /* let categoryOptions = this.props.id.map(id => {
            return <option key={id} value={id}>{id}</option>
        }); */
        return (
        <div>
            <hr />
            <h3>User Profile</h3>
            {/* <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Name </label><br />
                    <input type="text" ref="name" />
                </div>
                <div>
                    <label>Username</label><br />
                    <select ref="username">
                        {categoryOptions}
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form> */}
            <h3>END AddProfile.js</h3>
            <hr />
        </div>
        );
    }
}

export default AddProfile;