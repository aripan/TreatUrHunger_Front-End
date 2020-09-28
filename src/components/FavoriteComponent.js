import React from "react";
import Intro from "./IntroComponent";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { Media, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, deleteFavorite }) {
  return (
    <Media tag="li">
      <Media left middle>
        <Media
          object
          src={baseUrl + dish.image}
          alt={dish.name}
          width="100"
          height="100"
        />
      </Media>
      <Media body className="ml-5">
        <Media heading>{dish.name}</Media>
        <p className="text-justify">{dish.description}</p>
        <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
          <span className="fa fa-times"></span>
        </Button>
      </Media>
    </Media>
  );
}

const Favorites = (props) => {
  if (props.favorites?.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.favorites?.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.favorites.errMess}</h4>
        </div>
      </div>
    );
  } else {
    if (props.favorites?.favorites) {
      const favorites = props.favorites.favorites.dishes.map((dish) => {
        return (
          <div key={dish._id} className="col-12 mt-5">
            <RenderMenuItem dish={dish} deleteFavorite={props.deleteFavorite} />
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row">
            <Intro />
            <Breadcrumb className="breadcrumb-fontStyle">
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
            {favorites.length < 1 ? (
              <div className="container">
                <div className="row">
                  <h4 className="m-5 favorites-row">
                    Hey,{" "}
                    <span className="text-primary">
                      {props.auth.user.username}
                    </span>{" "}
                    you have deleted your favorites. Select again to make your
                    list. &#x1F60A;
                  </h4>
                </div>
              </div>
            ) : (
              <Media list>{favorites}</Media>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <Intro />
            <h4 className="m-5 favorites-row">
              Hey,{" "}
              <span className="text-primary">{props.auth.user.username}</span>{" "}
              you have no favorites. To make a list, select your favorite items.
              &#x1F60A;
            </h4>
          </div>
        </div>
      );
    }
  }
};

export default Favorites;
