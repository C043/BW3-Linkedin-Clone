import { GET_COMMENTS, SELECT_COMMENT } from "../actions";

const initialState = {
    content: [],
    selectedComment: null
}




const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                content: action.payload
            }
        case SELECT_COMMENT:
            return {
                ...state,
                selectedComment: action.payload
            }

        default:
            return state

    }

}



export default commentsReducer