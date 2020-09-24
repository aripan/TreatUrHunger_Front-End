import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    if (this.username.value.length < 1 || this.password.value.length < 1) {
      alert("Insufficient Data");
    } else {
      alert(
        "Username: " +
          JSON.stringify(this.username.value) +
          " Password: " +
          JSON.stringify(this.password.value) +
          " Remember: " +
          JSON.stringify(this.remember.checked)
      );
      this.toggleModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Login Button  */}
        <Button
          outline
          onClick={this.toggleModal}
          className="btn-outline-warning"
        >
          <span className="fa fa-sign-in fa-lg"></span> Login
        </Button>

        {/* Login Modal */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            {/* Here comes the UNCONTROLLED FORM */}
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>

              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter className="register-link">
            Don't have an account?
            <Link to="/register" onClick={this.toggleModal}>
              CLICK HERE
            </Link>{" "}
            to register.
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Login;
