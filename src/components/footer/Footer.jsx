import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.css";

class TheFooter extends React.Component {
   render() {
      return (
         <Fragment>
            <footer id="footer" style={{ backgroundColor: "#343a40" }}>
               <div className="container">
                  <div className="row">
                     <div className="col-md-3" style={{ marginTop: "15px" }}>
                        <h3>About Us</h3>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Pellentesque imperdiet consectetur dolor in
                           elementum.
                        </p>
                     </div>

                     <div className="col-md" style={{ marginTop: "15px" }}>
                        <ul
                           className="list-unstyled list-inline"
                           style={{
                              display: "flex",
                              justifyContent: "space-evenly"
                           }}
                        >
                           <li className="list-inline-item">
                              <a href="#" target="_blank">
                                 <FontAwesomeIcon
                                    icon={["fab", "twitter-square"]}
                                    size="2x"
                                 />
                              </a>
                           </li>
                           <li className="list-inline-item">
                              <a
                                 href="https://www.facebook.com/clicetcoupe/"
                                 target="_blank"
                              >
                                 <FontAwesomeIcon
                                    icon={["fab", "facebook-square"]}
                                    size="2x"
                                 />
                              </a>
                           </li>
                           <li className="list-inline-item">
                              <a
                                 href="https://www.linkedin.com/company/clicetcoupe/"
                                 target="_blank"
                              >
                                 <FontAwesomeIcon
                                    icon={["fab", "linkedin"]}
                                    size="2x"
                                 />
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="col-md-3" style={{ marginTop: "15px" }}>
                        <h5>
                           <strong>Contact Info</strong>
                        </h5>
                        <p>
                           <strong>Adress:</strong> 514 S. Magnolia St. Orlando,
                           FL 32806
                        </p>
                        <p>
                           <strong>Email:</strong> contact@clicetcoupe.com
                        </p>
                        <p>
                           <strong>Tel.:</strong> (+33) 6 12 34 56 78
                        </p>
                     </div>
                  </div>
               </div>
               <div className="footer-copyright text-center py-3">
                  © 2018 Copyright:
                  <a href="https://mdbootstrap.com/education/bootstrap/">
                     {" "}
                     MDBootstrap.com
                  </a>
               </div>
            </footer>
         </Fragment>
      );
   }
}

export default TheFooter;
