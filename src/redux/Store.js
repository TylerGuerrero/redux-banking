import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './RootReducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger();
const middleware = [thunk, logger];

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);