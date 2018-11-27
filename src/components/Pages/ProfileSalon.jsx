import React from "react";
import logo from '../../clic.png';
import styles from './ProfileSalon.module.css';
import { Table } from 'reactstrap';
import Calendar from 'react-calendar';
import Agenda from '../agenda/agenda.js';

const ProfileSalon = () => {

    return (
        <div className={styles.background}>
            <div className="row">
                <div className="col-lg-2 offset-lg-1">
                    <img className={styles.profilepic} src={logo} alt="logo" />
                </div>
                <div className="col-lg-9">
                    Présentation Services Horaires Tarifs
                </div>
            </div>
            <div className="row">
                <div className="offset-lg-1 col-lg-8">
                    <h1>Clic & Coupe</h1>
                    <p>
                        Batnae municipium in Anthemusia conditum Macedonum manu priscorum ab Euphrate flumine brevi spatio disparatur, refertum mercatoribus opulentis, ubi annua sollemnitate prope Septembris initium mensis ad nundinas magna promiscuae fortunae convenit multitudo ad commercanda
                    </p>
                    <div className="col-lg-12">
                        <Agenda /> {/* https://www.npmjs.com/package/react-agenda */}
                    </div>
                </div>
                <div className="col-lg-3">
                    <Table>
                        <thead>
                            Horaires
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lundi</td>
                                <td>09:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td>09:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td>09:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td>09:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td>09:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td>09:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td>Fermé</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Calendar />
                </div>
            </div>
        </div>

    );
};

export default ProfileSalon;