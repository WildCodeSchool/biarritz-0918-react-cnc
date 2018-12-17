import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ServicesTable from "./SalonServicesTable.jsx";

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
               block
               color={this.props.color}
               size="lg"
               onClick={this.toggle}
               style={{ marginTop: 10 }}
            >
               {this.props.name}
            </Button>
            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
               className={this.props.className}
               size="lg"
            >
               <ModalHeader toggle={this.toggle}>
                  Services {this.props.name}
               </ModalHeader>
               <ModalBody>
                  <ServicesTable name={this.props.name} />
               </ModalBody>
               <ModalFooter />
            </Modal>
         </div>
      );
   }
}

export default ServiceModal;
