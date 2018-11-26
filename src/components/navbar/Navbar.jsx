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
} from 'reactstrap';

import LoginModal from '../../LoginModal.jsx';
import logo from '../../clic.png';
import './Navbar.module.css';
import Error from '../Pages/Error.js';
import About from "../Pages/About.js"
import Home from "../Pages/Home.js"

//Example components
const Users = () => <h2>Users</h2>;


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
                    <Navbar color="dark" dark expand="md">
                        <img src={logo} id="headlogo" alt="logo" />
                        <NavbarBrand href="/">Clic et Coupe</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/about/">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/users/">Users</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                </DropdownToggle>
                                    <DropdownMenu right>
                                        {/* Input here */}
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
                        <Route path="/about/" component={About} />
                        <Route path="/users/" component={Users} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
