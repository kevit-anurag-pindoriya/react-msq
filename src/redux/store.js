
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootreducer from "./rootreducer";
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
