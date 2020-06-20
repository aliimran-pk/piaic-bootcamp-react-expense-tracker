
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Transaction = ({ transProp }) => {

  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transProp.transAmount < 0 ? '-' : '+';

  const deleteTrans = (id) => {
    deleteTransaction(id)
    toast.success('Transaction deleted successfully', {position: toast.POSITION.BOTTOM_CENTER,autoClose:2000})
  }

  return (
    <li className={transProp.transAmount < 0 ? 'minus' : 'plus'}>
      {transProp.transDesc} <span>{sign}${Math.abs(transProp.transAmount)}</span>
      <button onClick={() => deleteTrans(transProp.transId)} className="delete-btn">x</button>      
    </li>
  )
}