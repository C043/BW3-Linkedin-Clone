import { SHOW_MODAL_OFF, SHOW_MODAL_ON } from "../actions";

const initialState = {
  content: false,
};

const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_ON:
      return {
        ...state,
        content: action.payload,
      };
    case SHOW_MODAL_OFF:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default showModalReducer;
