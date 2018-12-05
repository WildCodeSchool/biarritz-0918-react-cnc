import React, { Fragment } from 'react';

import DesktopLayout from './Desktop.layout.jsx';
import Mobilelayout from './Mobile.layout.jsx';
import NavBar from '../components/navbar/Navbar.jsx';
import SearchList from "../pages/SearchList/SearchList.page.jsx";

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
						to: '/UserProfileForm/'
					},
					{
						label: 'Salons',
						to: '/salons/search'
					},

				]}
			/>
			{children}
		</Fragment>
	);

};

export default ResponsiveLayout;
