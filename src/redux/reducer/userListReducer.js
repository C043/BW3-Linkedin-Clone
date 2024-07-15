import { GET_USERS_LIST } from "../actions";


const initialState = {
    content: []
}


const userListReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                content: action.payload
            }


        default:
            return state
    }

}


export default userListReducer