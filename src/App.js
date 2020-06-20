import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/HeaderComp';
import { Balance } from './components/BalanceComp';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container" >
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />      
      </div>

    </GlobalProvider>
  );
}

export default App;
