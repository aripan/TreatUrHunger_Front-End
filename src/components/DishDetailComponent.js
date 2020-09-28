import React from "react";
import Intro from "./IntroComponent";
import SubmitComment from "./SubmitCommentComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderDish = ({ itemDetails, favorite, postFavorite }) => {
  if (itemDetails) {
    return (
      <Card>
        <CardImg top src={baseUrl + itemDetails.image} alt={itemDetails.name} />
        <CardImgOverlay>
          <Button
            outline
            color="primary"
            onClick={() =>
              favorite
                ? console.log("Already favorite")
                : postFavorite(itemDetails._id)
            }
          >
            {favorite ? (
              <span className="fa fa-heart"></span>
            ) : (
              <span className="fa fa-heart-o"></span>
            )}
          </Button>
        </CardImgOverlay>
        <CardBody className="clickedItem ">
          <CardTitle>{itemDetails.name}</CardTitle>
          <CardText>Category: {itemDetails.category}</CardText>
          <CardText>price: {itemDetails.price / 100} &euro;</CardText>
          <CardText>{itemDetails.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments, fetchPostComment, dishId }) => {
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
                        <span>&#x2B50;</span>
                      ))}
                  </p>

                  <p className="text-right">
                    -- {comment.author.firstName} {comment.author.lastName} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.updatedAt)))}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
        <SubmitComment dishId={dishId} fetchPostComment={fetchPostComment} />
      </div>
    );
  } else return <div></div>;
};

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Intro />
          <Breadcrumb className="breadcrumb-fontStyle">
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-12 col-md-5 m-1">
            <RenderDish
              itemDetails={props.dish}
              favorite={props.favorite}
              postFavorite={props.postFavorite}
            />
          </div>
          <div className="col-12 col-md-5 m-1 commentsOnDish">
            {/* Now writing props.comments is enough, 
                because we have separated comments from dishes */}
            <RenderComments
              comments={props.comments}
              fetchPostComment={props.fetchPostComment}
              dishId={props.dish._id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
