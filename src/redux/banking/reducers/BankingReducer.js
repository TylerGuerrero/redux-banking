// state object gets binded to the initial state object
// action object gets binded to the dispatch method action object

// (prevState, action) => newState

// state is immutable, everytime you update 
// you create a whole brand new state that gets updated, 
// we do this because we can go back in time and see 
// the different states in time

// return the same object type as the initial state object

import { DEPOSIT, WITHDRAW, COLLECT_INTEREST, DELETE_ACCOUNT } from '../Types'

const initialState = {
    amount: 0
}

export const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {
                ...state,
                amount: state.amount + action.payload
            }
        case WITHDRAW:
            return {
                ...state,
                amount: state.amount - action.payload
            }
        case COLLECT_INTEREST:
            return {
                ...state,
                amount: state.amount * 1.01
            }
        case DELETE_ACCOUNT:
            return {
                ...state,
                amount: state.amount - state.amount
            }
        default:
            return state
    }
}