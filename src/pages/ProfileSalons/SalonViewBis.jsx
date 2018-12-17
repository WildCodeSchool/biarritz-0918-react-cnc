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
import Calendar from "skedify-calendar";
import "skedify-calendar/lib/styles.css";
import Horaires from "./SalonHoraires.jsx";
import ServiceModal from "./ServiceModal.jsx";
import logo from "../../../src/clic.png";
import styles from "./ProfileSalon.module.css";
import ResponsiveLayout from "../../layouts/Responsive.layout.jsx";
import Loader from "../../components/loader/Loader.jsx";
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
         rdvs: []
      };
      this.update = this.update.bind(this);
   }

   updateSex(e) {
      let opt = e.currentTarget.options[e.currentTarget.selectedIndex];
      let sex = opt.value;
      this.setState({ sex: sex });
   }
   update(e, stylId) {
      let id = null;
      if (e === "undefined") {
         id = stylId;
      } else {
         let opt = e.currentTarget.options[e.currentTarget.selectedIndex];
         id = opt.value;
      }
      axios
         .get(AuthApi.SERVER + `/api/rdvs`, {
            headers: { Accept: "application/json" }
         })
         .then(response => {
            console.log(response.data);
            const rdvs = response.data.filter(rdv => {
               return rdv.stylist == "/api/stylists/" + id;
            });
            console.log(rdvs);

            this.setState({ rdvs: rdvs, currentStylist: id });
         });
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
                     <div className={`${styles.container} col-sm-6 col-lg-12`}>
                        <h1>{this.state.salons.name}</h1>
                        <ul>
                           <li>{this.state.salons.email}</li>
                           <li>{this.state.salons.phone}</li>
                        </ul>
                        <p>
                           TOTO municipium in Anthemusia conditum Macedonum manu
                           priscorum ab Euphrate flumine brevi spatio
                           disparatur, refertum mercatoribus opulentis, ubi
                           annua sollemnitate prope Septembris initium mensis ad
                           nundinas magna promiscuae fortunae convenit multitudo
                           ad commercanda
                        </p>
                     </div>
                  </div>

                  <div id="services" className="col-lg-12">
                     <Form onSubmit="">
                        <Row form>
                           <FormGroup>
                              <Label for="sex">
                                 <h2>Rendez-vous pour :</h2>
                              </Label>
                              <Input
                                 type="select"
                                 name="sex"
                                 id="sex"
                                 onChange={e => {
                                    this.updateSex(e);
                                 }}
                              >
                                 <option value="" selected disabled />
                                 <option value="Homme">Homme</option>
                                 <option value="Femme">Femme</option>
                              </Input>
                           </FormGroup>
                        </Row>
                        <Row form>
                           <FormGroup>
                              <Label for="stylist">
                                 <h2>Coiffeur :</h2>
                              </Label>
                              <Input
                                 type="select"
                                 name="stylist"
                                 id="stylist"
                                 onChange={e => {
                                    this.update(e);
                                 }}
                              >
                                 <option value="" disabled selected />
                                 {this.state.stylists.map(styl => (
                                    <option value={styl.id}>
                                       {styl.name + " " + styl.surname}
                                    </option>
                                 ))}
                              </Input>
                           </FormGroup>
                        </Row>
                        <SalonServiceTableBis name={this.state.sex} />
                     </Form>
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
                     <Agenda
                        rdvs={this.state.rdvs}
                        currentStylist={this.state.currentStylist}
                        update={this.update}
                     />
                  </div>
               </div>
            </div>
         </ResponsiveLayout>
      );
   }
}

export default ProfileSalon;
