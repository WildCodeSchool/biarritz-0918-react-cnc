import React from "react";
import InputSearch from '../input/Input.jsx';
import logo from '../../clic.png';


const Home = () => {

    return (
        <div>
            {/* <p>TEST Component called Home situated in components/Pages/Home.js</p> */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <InputSearch />
            </header>

        </div>
    );
};

export default Home;