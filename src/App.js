import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Router from "./Router.jsx";

library.add(fab, faEnvelope, faKey);

class App extends Component {
   render() {
      return (
         <div className="App">
            <Router />
         </div>
      );
   }
}

export default App;
