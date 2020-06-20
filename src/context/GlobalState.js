
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
      /*
    { transId: 1, transDesc: "Cash In Hand", transAmount: 10000 },
    { transId: 2, transDesc: "Salary", transAmount: 5000 },
    { transId: 3, transDesc: "School Fee", transAmount: -500 },
    { transId: 4, transDesc: "Gas Bill", transAmount: -1500 },
    { transId: 4, transDesc: "Electricity Bill", transAmount: -3500 }
    */
          ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  
  function restTransaction() {
   state.transactions = [];
  }

  
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    restTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}