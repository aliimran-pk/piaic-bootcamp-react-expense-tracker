import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer'

// Create the initial state
const initialState = {
    transactions: [
        {id: 1, description: "Salary", transactionAmount: 1000},
        {id: 2, description: "Gas Bill", transactionAmount: -100},
        {id: 3, description: "Profit", transactionAmount: 2000},
        {id: 4, description: "School Fee", transactionAmount: -1500}
    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {

    const [state] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}