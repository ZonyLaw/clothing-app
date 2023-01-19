import { CATEGORY_ACTION_TYPES } from "./category.type"

export const  CATEGORIES_INITIAL_STATE ={
    categoryMap: {}
}


export const categoriesReducer = (state=CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action

    switch(type){
        case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
            return { state, categoryMap: payload }
        default:
            return state
    }
}