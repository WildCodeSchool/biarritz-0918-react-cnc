import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input
} from 'reactstrap';

class ModalLogout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        console.log(props)

    }

    componentDidMount(){
        let route = window.location.pathname;
        let auth = this.props.authenticated;
        if(route === '/logout' && auth === true ){
            this.setState({
                modal: true
            });
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Button outline color="danger" onClick={this.toggle}>Logout</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <form onSubmit={e => {
                        e.preventDefault();
                        this.props.logout();
                        this.toggle();
                    }}>
                        <ModalHeader toggle={this.toggle}>Logout</ModalHeader>
                        <ModalBody>
                            Are you sure to exit the aplication man??
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="danger">Logout</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalLogout;