import { legacy_createStore } from "redux";
import todoReducer from "./reducers";

import { composeWithDevTools } from "@redux-devtools/extension";

const store = legacy_createStore(todoReducer, composeWithDevTools());

export default store;
