import React from "react";
import { Media, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Intro from "./IntroComponent";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

function RenderFavoriteItem({ dish, deleteFavorite }) {
  return (
    <Media tag="li">
      <Media left middle>
        <Media object src={baseUrl + dish.image} alt={dish.name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>{dish.name}</Media>
        <p>{dish.description}</p>
        <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
          <span className="fa fa-times"></span>
        </Button>
      </Media>
    </Media>
  );
}

const Favorites = (props) => {
  if (props.favorites) {
    if (props.favorites.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (props.favorites.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{props.favorites.errMess}</h4>
          </div>
        </div>
      );
    } else if (props.favorites.favorites != null) {
      const favorites = props.favorites.favorites.dishes.map((dish) => {
        return (
          <div key={dish._id} className="col-12 mt-5">
            <RenderFavoriteItem
              dish={dish}
              deleteFavorite={props.deleteFavorite}
            />
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
