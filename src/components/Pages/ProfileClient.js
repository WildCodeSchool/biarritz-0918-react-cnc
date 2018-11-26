import React from "react";
import InputSearch from '../input/Input.jsx';
import logo from '../../clic.png';


const ProfileClient = () => {

    return (
        <div>
            {/* <p>TEST Component called ProfileClient situated in components/Pages/ProfileClient.js</p> */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <InputSearch />
            </header>

        </div>
    );
};

export default ProfileClient;