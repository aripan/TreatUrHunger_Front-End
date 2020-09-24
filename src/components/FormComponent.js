import React, { Component } from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { Control, Form, Errors, actions } from "react-redux-form";

// VALIDATION
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
    // event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form
            model="feedback"
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <Row className="form-group">
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstName"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    minLength: "Must be greater than 2 characters! ",
                    maxLength: "Must be 15 characters or less!",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastName"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    minLength: "Must be greater than 2 characters! ",
                    maxLength: "Must be 15 characters or less!",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="telNum" md={2}>
                Tel. Number
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telNum"
                  id="telNum"
                  name="telNum"
                  placeholder="Tel. Number"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".telNum"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    minLength: "Must be greater than 2 numbers!",
                    maxLength: "Must be 15 numbers or less! ",
                    isNumber: "Must be a number!",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    validEmail: "Invalid Email Address!",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      className="form-check-input"
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select
                  model=".contactType"
                  name="contactType"
                  className="form-control"
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="12"
                  className="form-control feedback-form"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormComponent;
