import React, { Component } from "react";
import {
   Nav,
   NavLink,
   Button,
   Col,
   Row,
   Form,
   FormGroup,
   Label,
   Input
} from "reactstrap";
import axios from "axios";

import logo from "../../../src/clic.png";
import styles from "./ProfileSalon.module.css";
import ResponsiveLayout from "../../layouts/Responsive.layout.jsx";
import LoaderLogo from "../../components/loader/LoaderLogo.jsx";
import * as AuthApi from "../../Auth.api.js";
import Agenda from "../../components/agenda/myAgenda.jsx";
import SalonServiceTableBis from "../ProfileSalons/SalonServicesTableBis";

require("moment/locale/fr.js");
var now = new Date();

class ProfileSalon extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         stylists: [],
         salons: [],
         isPending: false,
         isError: false,
         currentStylist: "",
         sex: "",
         idSalon: "",
         nameSalon: "",
         rdvs: []
      };

      this.update = this.update.bind(this);
   }

   componentDidMount() {
      this.setState({ isPending: true });

      AuthApi.getUserId().then(response => {
         axios
            .get(AuthApi.SERVER + `/api/user_ids/${response.id}`, {
               headers: { Accept: "application/json" }
            })
            .then(response => {
               axios
                  .get(AuthApi.SERVER + `${response.data.salon}`, {
                     headers: { Accept: "application/json" }
                  })
                  .then(response => {
                     this.setState({
                        idSalon: response.data.id,
                        nameSalon: response.data.name
                     });
                     axios
                        .get(AuthApi.SERVER + `/api/stylists`, {
                           headers: { Accept: "application/json" }
                        })
                        .then(response => {
                           const stylists = response.data.filter(sytlist => {
                              return (
                                 sytlist.salon ==
                                 "/api/salons/" + this.state.idSalon
                              );
                           });
                           this.setState({
                              stylists: stylists,
                              isPending: false
                           });
                        })
                        .catch(() => this.setState({ isError: true }));
                  });
            });
      });
   }

   update(e) {
      let id = null;
      id = e.currentTarget.id;
      axios
         .get(AuthApi.SERVER + `/api/rdvs`, {
            headers: { Accept: "application/json" }
         })
         .then(response => {
            const rdvs = response.data.filter(rdv => {
               return rdv.stylist == "/api/stylists/" + id;
            });
            this.setState({ rdvs: rdvs, currentStylist: id });
         });
   }

   render() {
      if (this.state.isPending) {
         return (
            <ResponsiveLayout>
               <LoaderLogo />
            </ResponsiveLayout>
         );
      }

      return (
         <ResponsiveLayout>
            <div className="row">
               <div className="col-lg-6 offset-lg-3">
                  <h1>{this.state.nameSalon}</h1>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6 offset-lg-3">
                  <div id="agenda">
                     <h2>Agenda</h2>
                     {this.state.stylists.map((styl, i) => (
                        <Button
                           key={i}
                           id={styl.id}
                           href="#agenda"
                           name={styl.name}
                           style={{
                              marginLeft: 2,
                              marginRight: 2,
                              marginBottom: 5
                           }}
                           onClick={e => {
                              e.preventDefault();
                              this.update(e);
                           }}
                        >
                           {styl.surname}
                        </Button>
                     ))}
                     <Agenda
                        rdvs={this.state.rdvs}
                        currentStylist={this.state.currentStylist}
                        salon={true}
                     />
                  </div>
               </div>
            </div>
         </ResponsiveLayout>
      );
   }
}

export default ProfileSalon;
