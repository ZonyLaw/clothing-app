import { createAction } from "../../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategoriesMap = (categoiesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)