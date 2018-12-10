import React, { Fragment } from 'react';

const DesktopLayout = ({ children }) => {
	return (
		<Fragment>
			<div>{children}</div>
			<footer>Mon fotter format Desktop</footer>
		</Fragment>
	);
};

export default DesktopLayout;
