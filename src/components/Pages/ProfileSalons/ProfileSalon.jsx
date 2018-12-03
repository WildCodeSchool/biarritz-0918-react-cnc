import React, { Component } from 'react';
import logo from '../../../clic.png';
import styles from './ProfileSalon.module.css';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import Agenda from '../../agenda/agenda.jsx';
import Services from './SalonServicesTable.jsx';
import Horaires from './SalonHoraires.jsx';
import Carousel from './CarouselSalon.jsx';
import ServiceModal from './ServiceModal.jsx';
import axios from 'axios';
import moment from 'moment';
import { ReactAgenda, ReactAgendaCtrl, guid, getUnique, getLast, getFirst, Modal } from 'react-agenda';

require('moment/locale/fr.js');
var now = new Date();
// var itemsStylist = axios.get(`http://127.0.0.1:8000/api/salons`, { headers: { Accept: "application/json" } })
//     .then(response => console.log(response))

class ProfileSalon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            stylists: []
        }
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
        },
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
            .get(`http://127.0.0.1:8000/api/stylists`, { headers: { Accept: "application/json" } })
            .then(response => this.setState({ stylists: response.data, isPending: false }))
            .catch(() => this.setState({ isError: true }))
    }

    render() {
        if (this.state.isPending) {
            return (
                "Pending..."
            )
        }

        return (
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
                        <h1>Clic & Coupe</h1>
                        <p>
                            Batnae municipium in Anthemusia conditum Macedonum manu priscorum ab Euphrate flumine
                            brevi spatio disparatur, refertum mercatoribus opulentis, ubi annua sollemnitate prope
                            Septembris initium mensis ad nundinas magna promiscuae fortunae convenit multitudo ad commercanda
                    </p>
                        <Carousel />
                        <div className="col-lg-12">
                            {this.state.stylists.map(styl => (
                                <Button outline block name={styl.name}>{styl.surname}</Button>
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
            </div >
        );
    }
};

export default ProfileSalon;