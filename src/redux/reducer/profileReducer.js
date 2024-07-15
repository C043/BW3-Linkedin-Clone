import { GET_USER } from "../actions";

const initialState = {
  content: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
