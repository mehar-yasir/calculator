import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWare = [thunk];
const intitialState = {};
const store = createStore(
  rootReducer,
  intitialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
