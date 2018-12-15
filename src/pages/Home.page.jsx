import React from "react";

import InputSearch from "../components/input/InputSearch.jsx";
import logo from "../clic.png";
import ResponsiveLayout from "../layouts/Responsive.layout.jsx";

const Home = () => (
   <ResponsiveLayout>
      <div>
         <header className="App-header">
            <img
               src={logo}
               className="App-logo"
               alt="logo"
               style={{ width: "200px", height: "auto" }}
            />
            <InputSearch />
         </header>
      </div>
   </ResponsiveLayout>
);

export default Home;
