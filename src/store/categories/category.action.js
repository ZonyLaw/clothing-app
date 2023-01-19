import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORY_ACTION_TYPES } from "./category.type"

export const setCategoriesMap = (categoryMap) => 
createAction( CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, categoryMap  )