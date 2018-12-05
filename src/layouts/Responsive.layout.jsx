import React from 'react';

import DesktopLayout from './Desktop.layout.jsx';
import Mobilelayout from './Mobile.layout.jsx';
import NavBar from '../components/navbar/Navbar.jsx';

const ResponsiveLayout = ({ children }) => {
	if (window.innerWidth > window.innerHeight) {
		return (
			<DesktopLayout>
				<NavBar
					navItems={[
						{
							label: 'Home',
							to: '/'
						},
						{
							label: 'Profile client',
							to: '/UserProfileForm/'
						}
					]}
				/>
				{children}
			</DesktopLayout>
		);
	} else {
		return <Mobilelayout>{children}</Mobilelayout>;
	}
};

export default ResponsiveLayout;
