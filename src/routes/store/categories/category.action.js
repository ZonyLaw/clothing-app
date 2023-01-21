// at the moement I am not using this

import { createAction } from "../../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategories = (categoriesArray) => 
createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)