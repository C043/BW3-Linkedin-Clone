import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userListReducer from "../reducer/userListReducer";
import experiencesReducer from "../reducer/experencesReducer";
import showModalReducer from "../reducer/showModalReducer";
import itemSelectedReducer from "../reducer/itemSelectedReducer";
import postsReducer from "../reducer/postsReducer";
import jobReducer from "../reducer/jobReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: userListReducer,
  experiences: experiencesReducer,
  show: showModalReducer,
  item: itemSelectedReducer,
  posts: postsReducer,
  jobs: jobReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
