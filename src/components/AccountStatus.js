import React from 'react'
import { useSelector } from 'react-redux'

const AccountStatus = () => {
    const BankState = useSelector(state => state.bank)
    return (
        <div>
            <h1>{BankState.isSavingsAccount ? 'Savings Account' : 'Checking Account'}</h1>
        </div>
    )
}

export default AccountStatus
