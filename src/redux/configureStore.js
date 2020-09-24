import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Dishes } from "./dishReducer";
import { Comments } from "./commentReducer";
import { Promotions } from "./promotionReducer";
import { Leaders } from "./leaderReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
