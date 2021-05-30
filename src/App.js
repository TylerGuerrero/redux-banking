import React from 'react'
import { Provider } from 'react-redux'
import AccountStatus from './components/AccountStatus'
import Auth from './components/Auth'
import Balance from './components/Balance'
import Banking from './components/Banking'
import { store } from './redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Auth/>
        <Balance/>
        <Banking />
        <AccountStatus />
      </div>
    </Provider>
  )
}

export default App
