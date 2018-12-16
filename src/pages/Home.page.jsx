import React from "react";

import InputSearch from "../components/input/InputSearch.jsx";
import logo from "../clic.png";
import ResponsiveLayout from "../layouts/Responsive.layout.jsx";

const Home = () => (
   <ResponsiveLayout>
      <div className="App-header">
         <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: "200px", height: "auto" }}
         />
         <InputSearch />
      </div>
      <div className="container">
         <div className="row" id="column-wrapper">
            <div className="col-lg-auto">
               <h3>hello</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </p>
            </div>
            <div className="col-lg-auto offset-lg-1">
               <h3>hello</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </p>
            </div>
            <div className="col-lg-auto offset-lg-1">
               <h3>hello</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </p>
            </div>
         </div>
      </div>
   </ResponsiveLayout>
);

export default Home;
