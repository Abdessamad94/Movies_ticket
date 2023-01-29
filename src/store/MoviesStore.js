import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const MoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_MOVIES":
      return {
        ...state,
        movies: action.paylod,
      };
      break;
    case "ONE_MOVIE":
      return { movie: action.paylod };
      break;
    default:
      return state;
      break;
  }
};

const store = createStore(MoviesReducer, applyMiddleware(...middleware));

export default store;
