import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import FormComponent from "./FormComponent";
import Intro from "./IntroComponent";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Intro />
        <Breadcrumb className="breadcrumb-fontStyle">
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Location Information</h2>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h4>Our Address</h4>
          <address className="offset-sm-1">
            Fake Street 123
            <br />
            Fake City
            <br />
            Germany
            <br />
            <i className="fa fa-phone"></i> : + (0) 123 456 789
            <br />
            <i className="fa fa-fax"></i> : + (0) 123 456 789
            <br />
            <i className="fa fa-envelope"></i> :{" "}
            <a href="mailto:treatUrHunger@food.net" className="contact-email">
              treatUrHunger@food.net
            </a>
          </address>
        </div>
        {/* <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div> */}
        <div className="col-12 col-sm-6 offset-sm-1 feedbackImg">
          <img
            src="/assets/images/thank-you.jpg"
            alt="Feedback"
            width="100%"
            height="auto"
            className="d-none d-sm-block d-md-block"
          />
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+ (0) 123 456 789"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a
              role="button"
              className="btn btn-info"
              href="https://www.skype.com/"
            >
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:treatUrHunger@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <FormComponent
          resetFeedbackForm={props.resetFeedbackForm}
          postFeedback={props.postFeedback}
        />
      </div>
    </div>
  );
};

export default Contact;
