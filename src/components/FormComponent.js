import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";

class FormComponent extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstName: false,
        lastName: false,
        telNum: false,
        email: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  // VALIDATION METHODS FOR THE 4 INPUTS
  validate(firstName, lastName, telNum, email) {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
    };

    // FirstName
    if (this.state.touched.firstName && firstName.length < 3)
      errors.firstName = "First Name should be >= 3 characters";
    else if (this.state.touched.firstName && firstName.length > 10)
      errors.firstName = "First Name should be <= 10 characters";

    //LastName
    if (this.state.touched.lastName && lastName.length < 3)
      errors.lastName = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastName && lastName.length > 10)
      errors.lastName = "Last Name should be <= 10 characters";

    //Tel. Number
    const reg = /^\d+$/;
    if (this.state.touched.telNum && !reg.test(telNum))
      errors.telNum = "Tel. Number should contain only numbers";

    //Email
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.state.touched.email && !validEmail.test(email))
      errors.email = "Please enter a valid email address";

    // if (
    //   this.state.touched.email &&
    //   email.split("").filter((x) => x === "@").length !== 1
    // )
    //   errors.email = "Email should contain a @";

    return errors;
  }

  render() {
    //Invoking the errors defined in validate () method
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.telNum,
      this.state.email
    );

    return (
      <React.Fragment>
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  //Valid Flag
                  // valid={errors.firstName === ""}
                  //Invalid Flag
                  invalid={errors.firstName !== ""}
                  // Invoking the handleBlur method
                  onBlur={this.handleBlur("firstName")}
                  onChange={this.handleInputChange}
                />
                {/* Calling the error method */}
                <FormFeedback>{errors.firstName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  //Valid Flag
                  // valid={errors.lastName === ""}
                  //Invalid Flag
                  invalid={errors.lastName !== ""}
                  // Invoking the handleBlur method
                  onBlur={this.handleBlur("lastName")}
                  onChange={this.handleInputChange}
                />
                {/* Calling the error method */}
                <FormFeedback>{errors.lastName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telNum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telNum"
                  name="telNum"
                  placeholder="Tel. Number"
                  value={this.state.telNum}
                  //Valid Flag
                  // valid={errors.telNum === ""}
                  //Invalid Flag
                  invalid={errors.telNum !== ""}
                  // Invoking the handleBlur method
                  onBlur={this.handleBlur("telNum")}
                  onChange={this.handleInputChange}
                />
                {/* Calling the error method */}
                <FormFeedback>{errors.telNum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  //Valid Flag
                  // valid={errors.email === ""}
                  //Invalid Flag
                  invalid={errors.email !== ""}
                  // Invoking the handleBlur method
                  onBlur={this.handleBlur("email")}
                  onChange={this.handleInputChange}
                />
                {/* Calling the error method */}
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  value={this.state.contactType}
                  onChange={this.handleInputChange}
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormComponent;
