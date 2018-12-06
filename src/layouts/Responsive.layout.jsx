import React, { Fragment } from 'react';

import DesktopLayout from './Desktop.layout.jsx';
import Mobilelayout from './Mobile.layout.jsx';
import NavBar from '../components/navbar/Navbar.jsx';
import SearchList from '../pages/SearchList/SearchList.page.jsx';

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
            to: 'admin'
          }
        ]}
      />
      {children}
    </Fragment>
  );
};

export default ResponsiveLayout;
