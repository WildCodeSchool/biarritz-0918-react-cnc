import React, { Component } from 'react';
import ProfileItem from './ProfileItem.jsx';

class ProfileClass extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let profileItems;
     if(this.props.profileclass){
         profileItems = this.props.profileclass.map( userprofile => {
             return (
                 <ProfileItem key={userprofile.id} name={userprofile.name} surname={userprofile.surname}
                 username={userprofile.username} mail={userprofile.email} phone={userprofile.phone} />
             );
         });
     }
    return (
        
      <div className="ProfileItem">
      <hr />
        <h3>User Profile:</h3>
          {profileItems}
        <hr />
      </div>      
    );
  }
}

export default ProfileClass;