import React, { Component } from "react";
import axios from "axios";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';


export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isPending: false,
            isError: false
        }
    }

    componentDidMount() {
        this.setState({ isPending: true });
        axios
            .get(`http://127.0.0.1:8000/api/salons`, { headers: { Accept: "application/json" } })
            .then(response => this.setState({ items: response.data, isPending: false }))
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

                <div className="col-lg-8">
                    {this.state.items.map(salons => (
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>{salons.name}</CardTitle>
                                    <CardSubtitle>{salons.email}</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button outline color="primary">Prendre rdv</Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            // TODO: Check Render Props on doc
            // <Request req={`http://127.0.0.1:8000/api/salons`} renderSuccess={
            //     (items) => items.map(salons => (
            //         <div>
            //             <Card>
            //                 <CardBody>
            //                     <CardTitle>{salons.name}</CardTitle>
            //                     <CardSubtitle>{salons.email}</CardSubtitle>
            //                 </CardBody>
            //                 <CardBody>
            //                     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            //                     <CardLink href="#">Card Link</CardLink>
            //                     <CardLink href="#">Another Link</CardLink>
            //                 </CardBody>
            //             </Card>
            //         </div>
            //     ))
            // } />
        );
    }
}