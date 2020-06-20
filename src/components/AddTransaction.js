
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext); // Get methoed from GlobalState Provider

  const [newTransDesc, setDesc]     = useState('');
  const [newTransAmount, setAmount] = useState(0);

    const onFormSubmitHandler = evnt => {
    evnt.preventDefault(); // disable page refresh

    if (Number(newTransAmount) === 0) {
      alert("Transaction Amount should be greater than zero");
      return false;
    }

    const newTransObj = {
      transId: Math.floor(Math.random() * 100000000),
      transDesc: newTransDesc,
      transAmount: +newTransAmount
    }

    addTransaction(newTransObj); // Call methoed in the Global State
    
    //Reset Values
    setDesc('');
    setAmount(0)
  }

  return (
    <>
      <h3>ENTER NEW TRANSACTION</h3>
      
      <form onSubmit={onFormSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input type="text" value={newTransDesc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Transaction Description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">AMOUNT <span> (Add + for Income & - for Expense)</span></label> 
          <input type="number" value={newTransAmount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Transaction Amount..." />
        </div>
        <button className="btn">ADD</button>
      </form>
    </>
  )
}