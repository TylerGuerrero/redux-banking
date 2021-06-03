// state gets binded to initial state object
// action gets binded to action object called from dispatch

// (prevState, action) => newState

// state is immutable. Every time state is updated, a whole 
// brand new state is created, we do this so we can go back
// in time to see how each state was changed for debugging

// everytime we return a state we return the same exact state 
// type as our orginal state object for the reducer

import { TOGGLE_AUTH } from '../Types'

const initalState = {
    isLoggedIn: false
}

export const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH: 
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        default:   
            return state
    }
}
