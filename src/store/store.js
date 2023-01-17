import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

//log out the states
const middleWares = [logger];

// compose is a way to pass multiple functions from left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);