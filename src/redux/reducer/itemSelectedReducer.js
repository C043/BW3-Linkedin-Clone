import { SELECT_EXP, SELECT_JOB, SELECT_JOB_DES, SELECT_JOB_HEADER, SELECT_POST } from "../actions";

const initialState = {
  selectedExp: "",
  selectedPost: "",
  selectedJobHeader: "",
  selectedJob: "",
  selectedJobDes: "",
};

const itemSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EXP:
      return {
        ...state,
        selectedExp: action.payload,
      };
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    case SELECT_JOB_HEADER:
      return {
        ...state,
        selectedJobHeader: action.payload,
      };
    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      };
    case SELECT_JOB_DES:
      return {
        ...state,
        selectedJobDes: action.payload,
      };
    default:
      return state;
  }
};

export default itemSelectedReducer;
