import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from 'reactstrap';
import ServicesTable from './SalonServicesTable.jsx';

class ServiceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button
                    outline
                    block
                    color={this.props.color}
                    size="lg"
                    onClick={this.toggle}
                    style={{ marginTop: 10 }}
                >
                    {this.props.name}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
                    <ModalHeader toggle={this.toggle}>Services {this.props.name}</ModalHeader>
                    <ModalBody>
                        <Input type="text" name="email" placeholder="Email" required />
                        <br />
                        <Input type="password" name="password" placeholder="Password" required />
                        <ServicesTable name={this.props.name} />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ServiceModal;