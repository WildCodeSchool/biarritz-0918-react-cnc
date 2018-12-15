import React, { Fragment } from "react";

const MobileLayout = ({ children }) => {
   return (
      <Fragment>
         <nav>Ma barre de navigation format: Mobile</nav>
         <div>{children}</div>
         <footer>Mon fotter format Mobile</footer>
      </Fragment>
   );
};

export default MobileLayout;
