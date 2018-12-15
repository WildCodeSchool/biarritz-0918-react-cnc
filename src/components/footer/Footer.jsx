import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.css';

class TheFooter extends React.Component {
    render(){
        return(
            <Fragment>
                <footer className={styles.bgcolor}>
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" color="" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-tw mx-1">
                                    <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-gplus mx-1">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-li mx-1">
                                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-dribbble mx-1">
                                    <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default TheFooter;
