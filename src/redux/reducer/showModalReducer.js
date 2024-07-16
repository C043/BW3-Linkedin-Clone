import { SHOW_EDIT_EXPERIENCE_OFF, SHOW_EDIT_EXPERIENCE_ON, SHOW_EXPERIENCE_OFF, SHOW_EXPERIENCE_ON } from "../actions";

const initialState = {
  experience: false,
  editExp: false,
};

const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EXPERIENCE_ON:
      return {
        ...state,
        experience: action.payload,
      };
    case SHOW_EXPERIENCE_OFF:
      return {
        ...state,
        experience: action.payload,
      };
    case SHOW_EDIT_EXPERIENCE_ON:
      return {
        ...state,
        editExp: action.payload,
      };
    case SHOW_EDIT_EXPERIENCE_OFF:
      return {
        ...state,
        editExp: action.payload,
      };
    default:
      return state;
  }
};

export default showModalReducer;
