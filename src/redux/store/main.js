import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userListReducer from "../reducer/userListReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: userListReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
