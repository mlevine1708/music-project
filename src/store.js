import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";

const initialState = { users: [] };
const middleware = [thunk];
const store = createStore(
  userReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
