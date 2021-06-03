import { combineReducers } from 'redux'
import { authReducer } from './authentication/reducers/AuthenticationReducers'
import { bankReducer } from  './banking/reducers/BankingReducer'


export const rootReducer = combineReducers({
    bank: bankReducer,
    auth: authReducer
})