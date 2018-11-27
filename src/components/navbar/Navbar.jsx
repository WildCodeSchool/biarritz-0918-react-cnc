import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Input,
    Form,
    FormGroup
} from 'reactstrap';

import LoginModal from '../../LoginModal.jsx';
import logo from '../../clic.png';
import styles from './Navbar.module.css';
import Error from '../Pages/Error.jsx';
import Home from "../Pages/Home.jsx"
import ProfileClient from "../Pages/ProfileClients/ProfileClient.jsx"
import ProfileSalon from '../Pages/ProfileSalon.jsx';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar className={styles.toto} color="light" light expand="md">
                        <img src={logo} alt="logo" />
                        <NavbarBrand href="/">Clic et Coupe</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/cprofile/">Profile Client</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/sprofile/">Profile Salon</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                </DropdownToggle>
                                    <DropdownMenu right>
                                        {/* Dropdown menu here */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <LoginModal />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    {/* Routes definition of paths and related components */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cprofile/" component={ProfileClient} />
                        <Route path="/sprofile/" component={ProfileSalon} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
