import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getUserReducer } from "./reducers/userReducer";

import {
  getProductReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";

import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  user: getUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
