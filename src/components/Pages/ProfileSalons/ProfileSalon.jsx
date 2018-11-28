import React from "react";
import logo from '../../../clic.png';
import styles from './ProfileSalon.module.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Agenda from '../../agenda/agenda.jsx';
import Services from './SalonServices.jsx';
import Horaires from './SalonHoraires.jsx';
import Carousel from './CarouselSalon.jsx';

const ProfileSalon = () => {

    return (
        <div className="container-fluid salon">
            <div className="row" id={styles.firstrow}>
                <div className="col-lg-2 offset-lg-1">
                    <img className={styles.profilepic} src={logo} alt="logo" />
                </div>
                <div className="col-lg-4">
                    <Nav>
                        <NavLink href="#">Présentation</NavLink>
                        <NavLink href="#services">Services</NavLink>
                        <NavLink href="#agenda">Agenda</NavLink>
                        <NavLink href="#horaires">Horaires</NavLink>
                    </Nav>

                </div>
            </div>
            <div className="row">
                <div className="offset-lg-1 col-lg-6">
                    <h1>Clic & Coupe</h1>
                    <p>
                        Batnae municipium in Anthemusia conditum Macedonum manu priscorum ab Euphrate flumine
                        brevi spatio disparatur, refertum mercatoribus opulentis, ubi annua sollemnitate prope
                        Septembris initium mensis ad nundinas magna promiscuae fortunae convenit multitudo ad commercanda
                    </p>
                    <Carousel />
                    <div className="col-lg-12">
                    </div>
                    <div id="services" className="col-lg-12">
                        <h2>Services</h2>
                        <Services />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div id="agenda">
                        <h2>Agenda</h2>
                        <Agenda />
                    </div>
                    <div id="horaires">
                        <h2>Horaires</h2>
                        <Horaires />
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ProfileSalon;