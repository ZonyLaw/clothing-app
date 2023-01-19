import {compose, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

// logger is what is displaying and before it reach the dispatch there is a middle agent it goes through first'

const middlewares = [logger];
const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = configureStore({ reducer: rootReducer
 
});