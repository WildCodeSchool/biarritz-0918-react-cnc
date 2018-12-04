import React, { Fragment } from "react";
// import InputSearch from '../input/InputSearch.jsx';
// import logo from '../../clic.png';
// import {Container} from "reactstrap";
// import {
//     // Collapse,
//     Navbar,
//     // NavbarToggler,
//     NavbarBrand,
//     Nav,
//     //     NavItem,
//     //     NavLink,
//     //     UncontrolledDropdown,
//     //     DropdownToggle,
//     //     DropdownMenu,
//     //     DropdownItem,
//     //     Button,
//     //     Input,
//     //     Form,
//     //     FormGroup
// } from 'reactstrap';
import ResponsiveLayout from '../layouts/Responsive.layout.jsx';
import NavBar from '../components/navbar/Navbar.jsx'


// const Home = () => {

//     return (
//         <div>
//             {/* <p>TEST Component called Home situated in components/Pages/Home.js</p> */}
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" style={{width: '200px', height: 'auto'}}/>
//             <InputSearch />
//             </header>
//         </div>
//     );
// };

const Home = () => <ResponsiveLayout>
    <NavBar navItems={
        [
            {
                label: "Home",
                to: "/"
            },
            {
                label: "Profile client",
                to: "/cprofile/"
            }
        ]
    } />
    Home paege
    </ResponsiveLayout>

export default Home;