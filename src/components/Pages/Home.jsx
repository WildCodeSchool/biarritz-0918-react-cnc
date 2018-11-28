import React from "react";
import InputSearch from '../input/InputSearch.jsx';
import logo from '../../clic.png';
import {Container} from "reactstrap";


const Home = () => {

    return (
        <div>
            {/* <p>TEST Component called Home situated in components/Pages/Home.js</p> */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" style={{width: '200px', height: 'auto'}}/>
            <InputSearch />
            </header>
        </div>
    );
};

export default Home;