import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// ALL REDUCERS
import { Dishes } from "./Reducer/dishReducer";
import { Comments } from "./Reducer/commentReducer";
import { Promotions } from "./Reducer/promotionReducer";
import { Leaders } from "./Reducer/leaderReducer";
import { Favorites } from "./Reducer/favoriteReducer";
import { Auth } from "./Reducer/authReducer";
import { Initial } from "./Reducer/formReducer";
// MIDDLEWARE
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      favorites: Favorites,
      auth: Auth,
      ...createForms({
        feedback: Initial,
      }),
    }),
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
