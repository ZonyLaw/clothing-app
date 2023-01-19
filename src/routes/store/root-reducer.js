import { categoriesReducer } from "./categories/category.reducer";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    categories: categoriesReducer,
})