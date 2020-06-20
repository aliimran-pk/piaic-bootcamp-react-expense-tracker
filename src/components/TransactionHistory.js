import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionHistory = () => {
    
  // use transactions state variable from GlobalState
   const {transactions} = useContext(GlobalContext); // Exported from GlobalSte in Provider
  
    return (
      <>
      <h3>HISTORY</h3>
      <ul className="list">
        {transactions.map(trans => (<Transaction key={trans.transId} transProp={trans} />))}
      </ul>
  </>
    )
}