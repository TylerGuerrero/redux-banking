import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './RootReducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger();
const middleware = [thunk, logger];

export const store = createStore(rootReducer,
    applyMiddleware(...middleware)
);