import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amountsArr = transactions.map(trans => trans.transAmount);
    const totalBalance = amountsArr.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <>
           <h4>Your Balance </h4> 
            <h1 style={{ color: 'blue' }}>${totalBalance}</h1> 
        </>
    )
}
