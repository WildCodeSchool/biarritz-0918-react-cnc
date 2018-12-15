import React, { Component } from "react";
import axios from "axios";
import {
   Card,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
   Button
} from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ResponsiveLayout from "../../layouts/Responsive.layout.jsx";

import Loader from "../../components/loader/Loader.jsx";
import * as AuthApi from "../../Auth.api.js";

export default class SearchList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         isPending: false,
         isError: false
      };
   }

   componentDidMount() {
      this.setState({ isPending: true });
      axios
         .get(AuthApi.SERVER + `/api/salons`, {
            headers: { Accept: "application/json" }
         })
         .then(response => {
            console.log(response);
            if (typeof this.props.id !== "undefined") {
               const salons = response.data.filter(salon => {
                  return salon.city == "/api/cities/" + this.props.id;
               });
               this.setState({ items: salons, isPending: false });
            } else {
               this.setState({ items: response.data, isPending: false });
            }
         })
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
               <div className="row">
                  <div className="col-lg-6 col-sm-8 offset-lg-1">
                     <div className="row">
                        {this.state.items.map(salons => (
                           <div className="col-lg-6 col-xs-12 col-sm-12">
                              <Card
                                 style={{
                                    marginTop: 10,
                                    borderRadius: 10,
                                    borderColor: "#333",
                                    backgroundImage:
                                       "linear-gradient(#f8f9fa, #f8f9fa, gray)"
                                 }}
                              >
                                 <CardBody>
                                    <CardTitle>{salons.name}</CardTitle>
                                    <CardSubtitle>{salons.email}</CardSubtitle>
                                    <CardText>
                                       This is a wider card with supporting text
                                       below as a natural lead-in to additional
                                       content. This content is a little bit
                                       longer.
                                    </CardText>
                                    <Link
                                       to={`/salons/${salons.id}_${
                                          salons.name
                                       }/view`}
                                    >
                                       <Button color="primary">
                                          Prendre rdv
                                       </Button>
                                    </Link>
                                 </CardBody>
                              </Card>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-2 hidden-xs">
                     <img
                        style={{
                           marginTop: 10
                        }}
                        src="../../map.png"
                        alt="map"
                     />
                  </div>
               </div>
            </div>
         </ResponsiveLayout>
      );
   }
}
