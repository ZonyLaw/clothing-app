import { USER_ACTION_TYPES } from "./user.type";

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

const INITIAL_STATE = {
    currentUswer: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
   
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: payload
            }
    
        default:
            return state;
    }

}