import React, { Component } from 'react';
import ProfileItem from './ProfileItem.js';

class ProfileClass extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let profileItems;
    if(this.props.profileclass){
        profileItems = this.props.profileclass.map( userprofile => {
            return (
                /* console.log(<ProfileItem name={userprofile.name} category={userprofile.category} />) */
                <ProfileItem key={userprofile.id} name={userprofile.name} category={userprofile.category} />
            );
        });
    }
    return (
        
      <div className="ProfileItem">
      <hr />
        <h3>START ProfileClass.js</h3>
        <h4>Latest</h4>
          TEST PROFILE CLASS
          {profileItems}
          <h3>END ProfileClass.js</h3>
        <hr />
      </div>      
    );
  }
}

export default ProfileClass;