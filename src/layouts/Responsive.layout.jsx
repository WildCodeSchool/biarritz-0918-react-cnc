import React, { Fragment } from "react";

import NavBar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";

const ResponsiveLayout = ({ children }) => {
   let getItems = () => {
      let roles = localStorage.getItem("ROLES");
      if (roles === null) {
         return [
            {
               label: "Salons",
               to: "/salons/search"
            },
            {
               label: "Register",
               to: "/register"
            }
         ];
      } else if (roles.includes("ROLE_ADMIN")) {
         return [
            {
               label: "Admin",
               to: "/admin"
            }
         ];
      } else if (roles.includes("ROLE_SALON")) {
         return [
            {
               label: "Mon profil",
               to: "/profile"
            }
         ];
      } else {
         return [
            {
               label: "Mon profil",
               to: "/profile"
            },
            {
               label: "Salons",
               to: "/salons/search"
            }
         ];
      }
   };
   return (
      <Fragment>
         <NavBar navItems={getItems} />
         <div className="container-fluid" id="wrap">
            {children}
         </div>
         <Footer />
      </Fragment>
   );
};

export default ResponsiveLayout;
