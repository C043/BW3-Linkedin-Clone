import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userListReducer from "../reducer/userListReducer";
import experiencesReducer from "../reducer/experencesReducer";
import showModalReducer from "../reducer/showModalReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: userListReducer,
  experiences: experiencesReducer,
  show: showModalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
