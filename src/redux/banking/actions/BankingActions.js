// action creator returns a action object that has
// a type and payload field

// dispatching an action is the only way to get into
// the store to update the global state

import { DEPOSIT, WITHDRAW, COLLECT_INTEREST, DELETE_ACCOUNT, TOGGLE_ACCOUNT } from '../Types'

export const depositAction = (amount) => {
    return {
        type: DEPOSIT,
        payload: amount
    }
}

export const withdrawAction = (amount) => {
    return {
        type: WITHDRAW,
        payload: amount
    }
}

export const collectInterestAction = () => {
    return {
        type: COLLECT_INTEREST,
        payload: ''
    }
}

export const deleteAccount = (amount) => {
    return {
        type: DELETE_ACCOUNT,
        payload: amount
    }
}

export const toggleAccount = () => {
    return {
        type: TOGGLE_ACCOUNT,
        payload: ''
    }
}