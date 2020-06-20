
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transProp }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transProp.transAmount < 0 ? '-' : '+';

  return (
    <li className={transProp.transAmount < 0 ? 'minus' : 'plus'}>
      {transProp.transDesc} <span>{sign}${Math.abs(transProp.transAmount)}</span><button onClick={() => deleteTransaction(transProp.transId)} className="delete-btn">x</button>
    </li>
  )
}