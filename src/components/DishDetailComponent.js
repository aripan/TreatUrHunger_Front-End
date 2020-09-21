import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(itemDetails) {
    return (
      <Card>
        <CardImg top src={itemDetails.image} alt={itemDetails.name} />
        <CardBody className="clickedItem ">
          <CardTitle>{itemDetails.name}</CardTitle>
          <CardText>{itemDetails.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null)
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <li>
                    <p>{comment.comment}</p>
                    {/* <p>{comment.rating} stars</p> */}
                    <p className="rating">
                      {Array(comment.rating)
                        .fill()
                        .map((_, i) => (
                          <p>⭐</p>
                        ))}
                    </p>
                    <p>
                      -- {comment.author} , {comment.date}
                    </p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      );
    else return <div></div>;
  }

  render() {
    return (
      <div className="row ">
        <div className="col-12 col-md-5 m-1">
          <Card>{this.renderDish(this.props.dishItems)}</Card>
        </div>
        <div className="col-12 col-md-5 m-1 commentsOnDish">
          <Card>{this.renderComments(this.props.dishItems.comments)}</Card>
        </div>
      </div>
    );
  }
}

export default DishDetail;
