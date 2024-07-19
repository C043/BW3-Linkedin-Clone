import {
  GET_COMMENTS,
  HAS_COMMENTS_ERROR_OFF,
  HAS_COMMENTS_ERROR_ON,
  IS_COMMENTS_LOADING_OFF,
  IS_COMMENTS_LOADING_ON,
} from "../actions";

const initialState = {
  content: [],
  isLoading: true,
  hasError: false,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        content: action.payload,
      };
    case IS_COMMENTS_LOADING_ON:
      return {
        ...state,
        isLoading: action.payload,
      };
    case IS_COMMENTS_LOADING_OFF:
      return {
        ...state,
        isLoading: action.payload,
      };
    case HAS_COMMENTS_ERROR_ON:
      return {
        ...state,
        isLoading: action.payload,
      };
    case HAS_COMMENTS_ERROR_OFF:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default commentsReducer;
