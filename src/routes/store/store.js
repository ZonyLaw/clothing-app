
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./root-reducer";

// logger is what is displaying and before it reach the dispatch there is a middle agent it goes through first'



export const store = configureStore({
    reducer: {
        rootReducer: rootReducer,
    }
});