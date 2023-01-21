// import { CATEGORIES_ACTION_TYPES } from "./category.type";
import { createSlice } from "@reduxjs/toolkit";
// import { selectCategoriesMap } from "./category.selector";

export const CATEGORIES_INITAIL_STATE = {
    categories: []
}


export const categorySlice = createSlice({
    name: "categories",
    initialState: CATEGORIES_INITAIL_STATE,
    reducers: {
        SET_CATEGORIES: (state, action) => { 
            console.log("reducer", action.payload) 
            state.categories = action.payload }
        
    }

    
})

export const {SET_CATEGORIES} = categorySlice.actions;

export default categorySlice.reducer;




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