import React from "react";
import { Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Intro from "./IntroComponent";

function RenderMenuItem({ dish }) {
  return (
    <Media tag="li">
      <Media left middle>
        <Media object src={dish.image} alt={dish.name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>{dish.name}</Media>
        <p>{dish.description}</p>
      </Media>
    </Media>
  );
}

const Favorites = (props) => {
  if (props.favorites != null) {
    const favorites = props.favorites.dishes.map((dish) => {
      return (
        <div key={dish._id} className="col-12 mt-5">
          <RenderMenuItem dish={dish} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Intro />
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>My Favorites</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>My Favorites</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <Media list>{favorites}</Media>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <Intro />
          <h4 className="m-5 favorites-row">
            You have no favorites. Please{" "}
            <span>
              <Link to="/register">Sign-in</Link>{" "}
            </span>{" "}
            to select your favorite items. &#x1F60A;
          </h4>
        </div>
      </div>
    );
  }
};

export default Favorites;
