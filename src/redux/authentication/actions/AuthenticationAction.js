// action creator will simply return a action object
// that will have a type and a payload

// dispatching a action object is the only way
// you can update the global state for the whole
// application

import { TOGGLE_AUTH } from "../Types"

export const toggleAuth = () => {
    return {
        type: TOGGLE_AUTH,
        payload: ''
    }
}