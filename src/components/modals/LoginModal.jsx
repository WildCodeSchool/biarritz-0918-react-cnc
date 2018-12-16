import React from "react";
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Input
} from "reactstrap";

class ModalLogin extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false
      };

      this.toggle = this.toggle.bind(this);
   }

   componentDidMount() {
      let route = window.location.pathname;
      let auth = this.props.authenticated;
      if (route === "/login" && auth === false) {
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
            <Button outline color="info" onClick={this.toggle}>
               Login
            </Button>
            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
               className={this.props.className}
            >
               <form
                  onSubmit={e => {
                     e.preventDefault();
                     const username = e.target.elements.email.value;
                     const password = e.target.elements.password.value;
                     this.props.login({ username, password });
                     this.toggle();
                  }}
               >
                  <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                  <ModalBody>
                     <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                     />
                     <br />
                     <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                     />
                  </ModalBody>
                  <ModalFooter>
                     <Button type="submit" color="success">
                        Login
                     </Button>{" "}
                     <Button color="secondary" onClick={this.toggle}>
                        Cancel
                     </Button>
                  </ModalFooter>
               </form>
            </Modal>
         </div>
      );
   }
}

export default ModalLogin;
