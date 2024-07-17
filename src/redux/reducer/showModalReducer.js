import {
  SHOW_DEL_EXP_OFF,
  SHOW_DEL_EXP_ON,
  SHOW_EDIT_EXPERIENCE_OFF,
  SHOW_EDIT_EXPERIENCE_ON,
  SHOW_EDIT_PROFILE_PIC_OFF,
  SHOW_EDIT_PROFILE_PIC_ON,
  SHOW_EXPERIENCE_OFF,
  SHOW_EXPERIENCE_ON,
} from "../actions";

const initialState = {
  experience: false,
  editExp: false,
  delExp: false,
  editPic: false
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
    case SHOW_EDIT_PROFILE_PIC_ON:
      return {
        ...state,
        editPic: action.payload
      };
    case SHOW_EDIT_PROFILE_PIC_OFF:
      return {
        ...state,
        editPic: action.payload
      };
    case SHOW_DEL_EXP_ON:
      return {
        ...state,
        delExp: action.payload,
      };
    case SHOW_DEL_EXP_OFF:
      return {
        ...state,
        delExp: action.payload,
      };

    default:
      return state;
  }
};

export default showModalReducer;
