import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

// VALIDATION PARAMETERS
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class SubmitComment extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleComment(values) {
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    // alert(
    //   "Author: " +
    //     JSON.stringify(values.author) +
    //     " Rating: " +
    //     JSON.stringify(values.rating) +
    //     " Comment: " +
    //     JSON.stringify(values.comment)
    // );
    this.toggleModal();
  }

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal} className="btn-outline-dark">
          <span className="fa fa-pencil"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            How was the taste?
          </ModalHeader>
          <ModalBody>
            <LocalForm
              className="p-3"
              onSubmit={(values) => this.handleComment(values)}
            >
              <Row className="form-group">
                <Label htmlFor="rating" md={3}>
                  Rating
                </Label>
                <Col md={9}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                    validators={{
                      required,

                      isNumber,
                    }}
                  >
                    <option>Select a number</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".rating"
                    show="touched"
                    messages={{
                      required: "Required! ",

                      isNumber: "Must be a number!",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={3}>
                  Your Name
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
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
                <Label htmlFor="comment" md={3}>
                  Comment
                </Label>
                <Col md={9}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    className="form-control"
                    rows="6"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 9, offset: 3 }}>
                  <Button type="submit" color="primary">
                    Your Comment
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SubmitComment;
