import React, { Fragment } from "react";

import logo from "../../clic.png";
import styles from "./LoaderLogo.module.css";

const Loader = props => {
   return (
      <Fragment>
         <img
            src={logo}
            className={styles.Loaderlogo}
            alt="logo"
            style={{ width: "50px", height: "auto" }}
         />
      </Fragment>
   );
};

export default Loader;
