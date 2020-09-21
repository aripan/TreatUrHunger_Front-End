import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ itemDetails }) => {
  if (itemDetails) {
    return (
      <Card>
        <CardImg top src={itemDetails.image} alt={itemDetails.name} />
        <CardBody className="clickedItem ">
          <CardTitle>{itemDetails.name}</CardTitle>
          <CardText>{itemDetails.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments }) => {
  if (comments != null) {
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
                        <span role="img">⭐</span>
                      ))}
                  </p>

                  <p>
                    -- {comment.author} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else return <div></div>;
};

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish itemDetails={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1 commentsOnDish">
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
