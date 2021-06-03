import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleAuth } from '../redux/authentication/actions/AuthenticationAction'

const Auth = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div>
            <button
            onClick={() => dispatch(toggleAuth())}
            className="btn btn-info">
                {auth.isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default Auth
