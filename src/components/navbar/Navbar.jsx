import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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

import * as AuthApi from '../../Auth.api';
import LoginModal from '../modals/LoginModal';
import LogoutModal from '../modals/LogoutModal';
import logo from '../../clic.png';
import styles from './Navbar.module.css';
import AuthContext from '../../AuthContext';

class TheNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isBurgerOpen: false,
      isAuthenticated: false
    };
  }

  componentDidMount = () => {
    let token = AuthApi.getToken();
    if (token != null) {
      this.setState({ isAuthenticated: true });
    }
  };
  handleLoginSubmit = (credentials) => {
    AuthApi.postCredentials(credentials).then(() => {
      this.setState({
        isAuthenticated: true
      });
    });
  };

  handleLogoutSubmit = () => {
    AuthApi.removeToken();
    this.setState({
      isAuthenticated: false
    });
  };

  toggle() {
    this.setState({
      isBurgerOpen: !this.toggle.isBurgerOpen
    });
  }

  render() {
    const isLogged = this.state.isAuthenticated;
    let Modal;
    if (isLogged) {
      Modal = (
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            handleLogoutSubmit: this.handleLogoutSubmit
          }}
        >
          <AuthContext.Consumer>
            {(data) => <LogoutModal logout={data.handleLogoutSubmit} authenticated={data.isAuthenticated} />}
          </AuthContext.Consumer>
        </AuthContext.Provider>
      );
    } else {
      Modal = (
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            handleLoginSubmit: this.handleLoginSubmit
          }}
        >
          <AuthContext.Consumer>
            {(data) => <LoginModal login={data.handleLoginSubmit} authenticated={data.isAuthenticated} />}
          </AuthContext.Consumer>
        </AuthContext.Provider>
      );
    }
    return (
      <Navbar className={styles.brand} color="light" light expand="md">
        <img src={logo} alt="logo" />
        <NavbarBrand href="/">Clic et Coupe</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isBurgerOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.props.navItems.map((navItem, i) => (
              <NavItem key={i}>
                <NavLink tag={Link} to={navItem.to}>
                  {navItem.label}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>{Modal}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
// const navbar =({ navItems }) => {
//     return <Navbar className={styles.brand} color="light" light expand="md">
//     </Navbar>
// }

TheNavBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TheNavBar;
