import React, { Component } from 'react';

class ProfileItem extends Component {
    
    constructor(props){
        super(props);
    }

  render() {
    return (
        <ul>
            <li>
             Name: {this.props.name}
            </li>
            <li>
             Category: {this.props.category}
            </li>
        </ul>
/*       <li>
          <strong>{this.props.name}</strong>: {this.props.category} Imported from ProfileItem
      </li> */
    );
  }
}

export default ProfileItem;