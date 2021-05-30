import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const total = useSelector((state) => (state.bank))
    return (
        <div>
            <h1>${total.amount}</h1>
        </div>
    )
}

export default Balance
