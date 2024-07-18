import { GET_USER, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  content: null,
  isLoading: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        content: action.payload,
      };
    case IS_LOADING_ON:
      return {
        ...state,
        isLoading: action.payload,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
