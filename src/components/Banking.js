import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositAction, withdrawAction, toggleAccount, collectInterestAction, deleteAccount} from '../redux/banking/actions/BankingActions'

const Banking = () => {
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const total = useSelector((state) => state.bank)
    console.log(total.amount)
    
    return (
        <div>
            <div className="mb-3">
                <input 
                type="number" 
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.valueAsNumber)}
                />
                <button 
                className="btn btn-sucess"
                onClick={() => dispatch(depositAction(amount))}
                >
                    Deposit
                </button>
                <button 
                className="btn btn-primary"
                onClick={() => dispatch(withdrawAction(amount))}
                >
                    Withdraw
                </button>
                <button 
                className="btn btn-warning"
                onClick={() => dispatch(collectInterestAction())}
                >
                    Collect Interest
                </button>
                <button 
                className="btn btn-secondary"
                onClick={() => dispatch(toggleAccount())}
                >
                    Check Account Type
                </button>
                <button 
                className="btn btn-danger"
                onClick={() => dispatch(deleteAccount(total.amount))}
                >
                    Delete Account
                </button>
            </div>
        </div>
    )
}

export default Banking
