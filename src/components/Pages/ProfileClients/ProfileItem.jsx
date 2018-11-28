import React, { Component } from 'react';

class ProfileItem extends Component {
    
    constructor(props){
        super(props);
    }

  render() {
    return (
        <ul>
            <li>
             ID: {this.props.id}
            </li>
            <li>
             Name: {this.props.name}
            </li>
            <li>
             Surname: {this.props.surname}
            </li>
            <li>
             Username: {this.props.username}
            </li>
            <li>
             mail: {this.props.mail}
            </li>
            <li>
             Phone: {this.props.phone}
            </li>
        </ul>
/*       <li>
          <strong>{this.props.name}</strong>: {this.props.category} Imported from ProfileItem
      </li> */
    );
  }
}

export default ProfileItem;