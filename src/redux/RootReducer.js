import { combineReducers } from 'redux'
import { bankReducer } from  './banking/reducers/BankingReducer'

export const rootReducer = combineReducers({
    bank: bankReducer
})