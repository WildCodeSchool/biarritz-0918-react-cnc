import React, { Component } from "react";
import { Nav, NavLink, Button } from "reactstrap";
import axios from "axios";
import Calendar from "skedify-calendar";
import "skedify-calendar/lib/styles.css";

import Horaires from "./SalonHoraires.jsx";
import ServiceModal from "./ServiceModal.jsx";
import logo from "../../../src/clic.png";
import styles from "./ProfileSalon.module.css";
import ResponsiveLayout from "../../layouts/Responsive.layout.jsx";
import Loader from "../../components/loader/Loader.jsx";
import * as AuthApi from "../../Auth.api.js";

require("moment/locale/fr.js");
var now = new Date();

class ProfileSalon extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [
            {
               start: new Date(2018, 0, 5, 7, 0, 0),
               end: new Date(2001, 0, 5, 9, 0, 0)
            }
         ],
         stylists: [],
         salons: [],
         isPending: false,
         isError: false
      };
   }

   update(items) {
      this.setState({ items: items });
   }

   componentDidMount() {
      this.setState({ isPending: true });

      axios
         .get(AuthApi.SERVER + `/api/stylists`, {
            headers: { Accept: "application/json" }
         })
         .then(response => {
            const stylists = response.data.filter(sytlist => {
               return sytlist.salon == "/api/salons/" + this.props.id;
            });
            this.setState({ stylists: stylists });
         })
         .catch(() => this.setState({ isError: true }));

      axios
         .get(AuthApi.SERVER + `/api/salons/${this.props.id}`, {
            headers: { Accept: "application/json" }
         })
         .then(response => {
            this.setState({ salons: response.data, isPending: false });
         })
         .then(this.setState({ isPending: false }))
         .catch(() => this.setState({ isError: true }));
   }

   render() {
      if (this.state.isPending) {
         return (
            <ResponsiveLayout>
               <Loader />
            </ResponsiveLayout>
         );
      }

      return (
         <ResponsiveLayout>
            <div className="row" id={styles.firstrow}>
               <div className="col-lg-2 offset-lg-1">
                  <img className={styles.profilepic} src={logo} alt="logo" />
               </div>
               <div className="col-lg-4">
                  <Nav>
                     <NavLink href="#presentation">Présentation</NavLink>
                     <NavLink href="#services">Services</NavLink>
                     <NavLink href="#agenda">Agenda</NavLink>
                     <NavLink href="#horaires">Horaires</NavLink>
                  </Nav>
               </div>
            </div>
            <div className="row">
               <div id="presentation" className="offset-lg-1 col-lg-6">
                  <div className="row">
                     <div className="col-sm-6 col-lg-12">
                        <h1>{this.state.salons.name}</h1>
                        <ul>
                           <li>{this.state.salons.email}</li>
                           <li>{this.state.salons.phone}</li>
                        </ul>
                        <p>
                           Batnae municipium in Anthemusia conditum Macedonum
                           manu priscorum ab Euphrate flumine brevi spatio
                           disparatur, refertum mercatoribus opulentis, ubi
                           annua sollemnitate prope Septembris initium mensis ad
                           nundinas magna promiscuae fortunae convenit multitudo
                           ad commercanda
                        </p>
                     </div>
                     {/* <div className="col-sm-6 col-lg-12">
                  <Carousel />
                </div> */}
                  </div>

                  <div id="services" className="col-lg-12">
                     <h2>Rendez-vous pour :</h2>
                     <ServiceModal name="Homme" color="primary" />
                     <ServiceModal name="Femme" color="danger" />
                  </div>
               </div>
               <div className="col-lg-4">
                  <div id="agenda">
                     <h2>Agenda</h2>
                     {this.state.stylists.map(styl => (
                        <Button
                           href="#agenda"
                           name={styl.name}
                           style={{
                              marginLeft: 2,
                              marginRight: 2,
                              marginBottom: 5
                           }}
                        >
                           {styl.surname}
                        </Button>
                     ))}
                     <Calendar
                        locale="fr"
                        step={60}
                        minTime="07:00:00"
                        maxTime="20:00:00"
                        items={this.state.items}
                     />
                  </div>
                  <div id="horaires">
                     <h2>Horaires et</h2>
                     <Horaires />
                  </div>
               </div>
            </div>
         </ResponsiveLayout>
      );
   }
}

export default ProfileSalon;
