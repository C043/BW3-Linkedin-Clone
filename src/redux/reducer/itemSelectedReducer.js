import { SELECT_EXP } from "../actions";

const initialState = {
  selectedExp: "",
};

const itemSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EXP:
      return {
        ...state,
        selectedExp: action.payload,
      };
    default:
      return state;
  }
};

export default itemSelectedReducer;
