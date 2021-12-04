import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":550,"category":"Savings","type":"Income","date":"2021-10-28","id":"987f6ad9-afff-4529-a2ed-6ea55ecf0b21"},{"amount":100,"category":"House","type":"Expense","date":"2021-10-28","id":"dee8a389-e366-4b97-ba1b-8916d592827f"},{"amount":200,"category":"Pets","type":"Expense","date":"2021-10-28","id":"49d63fc3-d5c6-43fe-83ca-86fe0bdd16f3"},{"amount":500,"category":"Food","type":"Expense","date":"2021-10-28","id":"3f18aa14-af00-4a3d-ad85-362e3d685c23"},{"amount":250,"category":"Salary","type":"Income","date":"2021-10-11","id":"ac1e4b15-d5ca-4b2c-9f80-9c4eaedc96fd"},{"amount":500,"category":"Lottery","type":"Income","date":"2021-10-20","id":"fe848e44-2f2e-4bd0-a7aa-41c31e916921"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    const balance = transactions.reduce((acc, currVal) => {
        return ( currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount )
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}