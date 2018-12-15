import React, { Component } from 'react';
import logo from '../../../src/clic.png';
import styles from './ProfileSalon.module.css';
import { Nav, NavLink, Button } from 'reactstrap';
import Agenda from '../../components/agenda/agenda.jsx';
import Horaires from './SalonHoraires.jsx';
import Carousel from './CarouselSalon.jsx';
import ServiceModal from './ServiceModal.jsx';
import axios from 'axios';
import { guid } from 'react-agenda';

import ResponsiveLayout from '../../layouts/Responsive.layout.jsx';
import Loader from '../../components/loader/Loader.jsx';
import * as AuthApi from '../../Auth.api.js';

require('moment/locale/fr.js');
var now = new Date();

class ProfileSalon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      stylists: [],
      salons: [],
      isPending: false,
      isError: false
    };
  }

  update(items) {
    this.setState({ items: items });
  }

  itemsBasile = [
    {
      _id: guid(),
      name: 'Meeting , dev staff!',
      startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
      endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
      classes: 'color-1 color-4'
    },
    {
      _id: guid(),
      name: 'Working lunch , Holly',
      startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0),
      endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 13, 0),
      classes: 'color-2'
    },
    {
      _id: guid(),
      name: 'Conference , plaza',
      startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0),
      endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 14, 30),
      classes: 'color-4'
    }
  ];

  itemsVianney = [
    {
      _id: 'event-4',
      name: 'Customers issues review',
      startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 10, 0),
      endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 15, 0),
      classes: 'color-3'
    },
    {
      _id: 'event-5',
      name: 'Group activity',
      startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 10, 0),
      endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 16, 30),
      classes: 'color-4'
    },
    {
      _id: 'event-6',
      name: 'Fun Day !',
      startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 9, 14),
      endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 17),
      classes: 'color-3'
    }
  ];

  componentDidMount() {
    this.setState({ isPending: true });

    axios
      .get(AuthApi.SERVER + `/api/stylists`, {
        headers: { Accept: 'application/json' }
      })
      .then((response) => {
        const stylists = response.data.filter((sytlist) => {
          return sytlist.salon == '/api/salons/' + this.props.id;
        });
        this.setState({ stylists: stylists });
      })
      .catch(() => this.setState({ isError: true }));

    axios
      .get(AuthApi.SERVER + `/api/salons/${this.props.id}`, {
        headers: { Accept: 'application/json' }
      })
      .then((response) => {
        this.setState({ salons: response.data, isPending: false });
      })
      .then(this.setState({ isPending: false }))
      .catch(() => this.setState({ isError: true }));
  }

  render() {
    if (this.state.isPending) {
      return (
        <ResponsiveLayout>
          <div className="container-fluid">
            <Loader />
          </div>
        </ResponsiveLayout>
      );
    }

    return (
      <ResponsiveLayout>
        <div className="container-fluid">
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
                    Batnae municipium in Anthemusia conditum Macedonum manu priscorum ab Euphrate flumine brevi spatio
                    disparatur, refertum mercatoribus opulentis, ubi annua sollemnitate prope Septembris initium mensis
                    ad nundinas magna promiscuae fortunae convenit multitudo ad commercanda
                  </p>
                </div>
                <div className="col-sm-6 col-lg-12">
                  <Carousel />
                </div>
              </div>
              <div className="col-lg-12">
                {this.state.stylists.map((styl) => (
                  <Button block href="#agenda" name={styl.name}>
                    {styl.surname}
                  </Button>
                ))}
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
                <Agenda items={this.state.items} />
              </div>
              <div id="horaires">
                <h2>Horaires et</h2>
                <Horaires />
              </div>
            </div>
          </div>
        </div>
      </ResponsiveLayout>
    );
  }
}

export default ProfileSalon;
