import React, { Fragment } from 'react';

import NavBar from '../components/navbar/Navbar.jsx';


const ResponsiveLayout = ({ children }) => {
  return (
    <Fragment>
      <NavBar
        navItems={[
          {
            label: 'Home',
            to: '/'
          },
          {
            label: 'Profile client',
            to: '/profile'
          },
          {
            label: 'Salons',
            to: '/salons/search'
          },
          {
            label: 'Admin',
            to: '/admin'
          },
          {
            label: 'Register',
            to: '/register'
          }
        ]}
      />
      {children}
    </Fragment>
  );
};

export default ResponsiveLayout;
