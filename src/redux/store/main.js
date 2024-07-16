import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userListReducer from "../reducer/userListReducer";
import experiencesReducer from "../reducer/experencesReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: userListReducer,
  experiences: experiencesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
