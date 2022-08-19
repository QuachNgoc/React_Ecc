import { configureStore, combineReducers } from "@reduxjs/toolkit";
import memberSlice from "./memberSlice";
import postSlice from "./postSlice";

const reducer = combineReducers({
  post: postSlice,
  member: memberSlice,
});

const store = configureStore({
  reducer,
});

export default store;
