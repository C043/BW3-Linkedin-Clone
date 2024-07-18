import { GET_USERS_LIST, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default userListReducer;
