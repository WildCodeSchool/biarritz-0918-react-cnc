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
      <div className="container-fluid">
         <div className="row" id="column-wrapper">
            <div className="col-lg-4">
               <div className="col-lg-12">
                  <h3>Les meilleurs salons</h3>
                  <p>
                     Nos partenaires sont les meilleurs salons de coiffure. Des
                     professionnels avec des standards de qualité élevés pour
                     répondre à tous vos besoins.
                  </p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="col-lg-12">
                  <h3>Simplicité</h3>
                  <p>
                     Notre système de prise de rendez-vous est facile et
                     intuitif pour être accessible à tous.
                  </p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="col-lg-12">
                  <h3>Rapidité</h3>
                  <p>
                     En trois clics, vous pouvez prendre rendez-vous avec votre
                     coiffeur préféré ou trouver un nouveau salon de coiffure
                     près de chez vous.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </ResponsiveLayout>
);

export default Home;
