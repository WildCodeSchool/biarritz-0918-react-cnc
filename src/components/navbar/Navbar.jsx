import React from 'react';
import PropTypes from 'prop-types';
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

import * as AuthApi from "../../Auth.api";
import LoginModal from '../modals/LoginModal';
import logo from '../../clic.png';
import styles from './Navbar.module.css';
import authContext from '../../AuthContext';
import AuthContext from '../../AuthContext';


// export default class Example extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <Navbar className={styles.toto} color="light" light expand="md">
//                         <img src={logo} alt="logo" />
//                         <NavbarBrand href="/">Clic et Coupe</NavbarBrand>
//                         <NavbarToggler onClick={this.toggle} />
//                         <Collapse isOpen={this.state.isOpen} navbar>
//                             <Nav className="ml-auto" navbar>
//                                 <NavItem>
//                                     <NavLink tag={Link} to="/">Home</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink tag={Link} to="/cprofile/">Profile Client</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink tag={Link} to="/search/">Search List</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink tag={Link} to="/sprofile/">Profile Salon</NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink tag={Link} to="/reactcpanel/">Admin Panel</NavLink>
//                                 </NavItem>
//                                 <UncontrolledDropdown nav inNavbar>
//                                     <DropdownToggle nav caret>
//                                         Options
//                                 </DropdownToggle>
//                                     <DropdownMenu right>
//                                         Dropdown menu here
//                                     </DropdownMenu>
//                                 </UncontrolledDropdown>
//                                 <NavItem>
//                                     <LoginModal onSubmit={this.props.handleLoginSubmit} />
//                                 </NavItem>
//                             </Nav>
//                         </Collapse>
//                     </Navbar>
//                     Routes definition of paths and related components
//                     <Switch>
//                         <Route path="/" exact component={Home} />
//                         <Route path="/cprofile/" component={ProfileClient} />
//                         <Route
//                             exact path="/sprofile/:id" 
//                             component= {({match}) => (
//                                 <ProfileSalon id={match.params.id} />
//                             )}
//                         />
//                         <Route path="/search/" component={SearchList} />
//                         <Route path="/reactcpanel/" component={AdminPanel} />
//                         <Route component={Error} />
//                     </Switch>
//                 </div>
//             </Router>
//         );
//     }
// }


class TheNavBar extends React.Component {
    constructor (props){
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
            isBurgerKingOpen : false,
            isAuthenticated : false
        }
    }
    handleLoginSubmite = (credentials) => {
            AuthApi.postCredentials(credentials)
            .then(() => {
                this.setState({
                    isAuthenticated : true
                })
            })
    }

    toggle(){
        this.setState({
            isBurgerKingOpen: !this.toggle.isBurgerKingOpen
        });
    }

    render(){
        return(
            <Navbar className={styles.brand} color="light" light expand="md">
                <img src={logo} alt="logo" />
                <NavbarBrand href="/">Clic et Coupe</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isBurgerKingOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {
                            this.props.navItems.map((navItem, i) => (
                                <NavItem key={i}>
                                    <NavLink tag={Link} to={navItem.to}>{navItem.label}</NavLink>
                                </NavItem>))
                        }
                        <NavItem>
                            <AuthContext.Provider value={{
                                isAuthenticated : this.state.isAuthenticated, 
                                handleLoginSubmite: this.handleLoginSubmite}}>
                                <authContext.Consumer>
                                    {data => (
                                        <LoginModal login={data.handleLoginSubmite}/>
                                    )}
                                </authContext.Consumer>
                            </AuthContext.Provider>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        )
    }


}
// const navbar =({ navItems }) => {
//     return <Navbar className={styles.brand} color="light" light expand="md">
//     </Navbar>
// }

TheNavBar.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    })).isRequired
}

export default TheNavBar;
