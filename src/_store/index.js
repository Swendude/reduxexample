import { combineReducers, createStore } from "redux";
import basketReducer from "./reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    basket: basketReducer,
  }),
  enhancer
);

export default store;