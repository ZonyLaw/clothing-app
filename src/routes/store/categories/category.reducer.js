// import { CATEGORIES_ACTION_TYPES } from "./category.type";
import { createSlice } from "@reduxjs/toolkit";


export const CATEGORIES_INITAIL_STATE = {
    categoriesMap: {}
}

export const counterSlice = createSlice({
    name: "categories",
    initialState: CATEGORIES_INITAIL_STATE,
    reducers: {
        SET_CATEGORY_MAP: (state) => {
          return{ ...state, categoriesMap: payload}
        }
    }

})
export const {SET_CATEGORY_MAP} = counterSlice.actions;
// export const categoriesReducer = (
//         state = CATEGORIES_INITAIL_STATE, 
//         action = {}
// ) =>{
//     const {type, payload } = action;

//     switch(type){
//         case CATEGORIES_ACTION_TYPES.SET_CATEGORY_MAP:
//             return {...state, categoriesMap: payload};
//         default:
//             return state;
//     }
// };