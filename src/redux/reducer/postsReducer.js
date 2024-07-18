import { GET_POSTS, HAS_ERROR_OFF, HAS_ERROR_ON, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
  isLoading: true,
  hasError: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
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
    case HAS_ERROR_ON:
      return {
        ...state,
        hasError: action.payload,
      };
    case HAS_ERROR_OFF:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
