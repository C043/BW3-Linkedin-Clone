import { GET_USER, HAS_ERROR_OFF, HAS_ERROR_ON, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  content: null,
  isLoading: true,
  hasError: false,
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

export default profileReducer;
