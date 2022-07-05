import { reducer } from "./reducer";
import { loginreducer } from "./loginreducer";
import { combineReducers } from "redux";
import { languagereducer } from "./languagereducer";

const rootreducer = combineReducers({ reducer, loginreducer, languagereducer });

export default rootreducer;
