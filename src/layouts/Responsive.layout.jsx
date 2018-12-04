import React from 'react';

import DesktopLayout from './Desktop.layout.jsx';
import Mobilelayout from './Mobile.layout.jsx';

const ResponsiveLayout = ({ children }) => {
    if (window.innerWidth > window.innerHeight) {
        return <DesktopLayout>{children}</DesktopLayout>
    } else {
        return <Mobilelayout>{children}</Mobilelayout>
    }
};

export default ResponsiveLayout; 