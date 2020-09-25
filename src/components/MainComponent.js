import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Register from "./RegisterComponent";
import Favorites from "./FavoriteComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchPostComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapDispatchToProps = (dispatch) => ({
  fetchPostComment: (dishId, rating, author, comment) =>
    dispatch(fetchPostComment(dishId, rating, author, comment)),

  fetchDishes: () => {
    dispatch(fetchDishes());
  },

  fetchComments: () => {
    dispatch(fetchComments());
  },

  fetchPromos: () => {
    dispatch(fetchPromos());
  },

  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },

  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          // DISHES
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          // PROMOTIONS
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          // LEADERS
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    };

    // To specify the chosen specific dish
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          // DISHES
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          // COMMENTS
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          // COMMENTS ON A DISH
          fetchPostComment={this.props.fetchPostComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/favorites" component={Favorites} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/aboutus"
              component={() => <About leaders={this.props.leaders} />}
            />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={this.props.dishes} />}
            />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route
              exact
              path="/contactus"
              component={() => (
                <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
