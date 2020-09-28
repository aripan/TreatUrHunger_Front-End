import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleReservation = this.handleReservation.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleReservation(event) {
    event.preventDefault();
    if (this.firstName.value.length < 1 || this.lastName.value.length < 1) {
      alert("Insufficient Data");
    } else {
      alert("Thank you for your request. We will process it soon!");
      // this.props.loginUser({
      //   username: this.username.value,
      //   password: this.password.value,
      // });
      this.toggleModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Login Or Logout Button  */}

        <Button
          outline
          onClick={this.toggleModal}
          className="btn-outline-warning ml-1"
        >
          <span className="fa fa-check fa-lg"></span> Reservation
        </Button>

        {/* Reservation Modal */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Reserve a Table</ModalHeader>
          <ModalBody>
            {/* Here comes the UNCONTROLLED FORM */}
            <Form onSubmit={this.handleReservation}>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  innerRef={(input) => (this.firstName = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  innerRef={(input) => (this.lastName = input)}
                />
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="guestNumber" sm={2}>
                  No. of Guests
                </Label>

                <FormGroup
                  className="form-check form-check-inline offset-1"
                  sm={10}
                >
                  <Label className="form-check-label" for="inlineRadio1">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      innerRef={(input) => (this.option1 = input)}
                    />
                    1
                  </Label>
                </FormGroup>
                <FormGroup className="form-check form-check-inline " sm={10}>
                  <Label className="form-check-label" for="inlineRadio2">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                      innerRef={(input) => (this.option2 = input)}
                    />
                    2
                  </Label>
                </FormGroup>
                <FormGroup className="form-check form-check-inline " sm={10}>
                  <Label className="form-check-label" for="inlineRadio3">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                      innerRef={(input) => (this.option3 = input)}
                    />
                    3
                  </Label>
                </FormGroup>
                <FormGroup className="form-check form-check-inline " sm={10}>
                  <Label className="form-check-label" for="inlineRadio4">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio4"
                      value="option4"
                      innerRef={(input) => (this.option4 = input)}
                    />
                    4
                  </Label>
                </FormGroup>
                <FormGroup className="form-check form-check-inline " sm={10}>
                  <Label className="form-check-label" for="inlineRadio5">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio5"
                      value="option5"
                      innerRef={(input) => (this.option5 = input)}
                    />
                    5
                  </Label>
                </FormGroup>
                <FormGroup className="form-check form-check-inline " sm={10}>
                  <Label className="form-check-label" for="inlineRadio6">
                    <Input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio6"
                      value="option6"
                      innerRef={(input) => (this.option6 = input)}
                    />
                    6
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="section" md={2}>
                  Section
                </Label>
                <ButtonGroup md={10} className="offset-1">
                  <Button type="button" className="btn-success">
                    Non-smoking
                  </Button>
                  <Button type="button" className="btn-danger">
                    Smoking
                  </Button>
                </ButtonGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleDate">Date</Label>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  innerRef={(input) => (this.exampleDate = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleTime">Time</Label>
                <Input
                  type="time"
                  name="time"
                  id="exampleTime"
                  innerRef={(input) => (this.exampleTime = input)}
                />
              </FormGroup>

              <Button type="submit" value="submit" color="primary">
                Reserve
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Reservation;
