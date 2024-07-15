import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;