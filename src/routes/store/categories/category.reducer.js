import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const CATEGORIES_INITAIL_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (
        state = CATEGORIES_INITAIL_STATE, 
        action = {}
) =>{
    const {type, payload } = action;

    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORY_MAP:
            return {...state, categoriesMap: payload};
        default:
            return state;
    }
};