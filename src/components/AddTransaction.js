
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const AddTransaction = () => {

  toast.configure()
  const { addTransaction } = useContext(GlobalContext); // Get methoed from GlobalState Provider

  const [newTransDesc, setDesc]     = useState('');
  const [newTransAmount, setAmount] = useState(0);

    const onFormSubmitHandler = evnt => {
    evnt.preventDefault(); // disable page refresh

    if (Number(newTransAmount) === 0) {      
      toast.error('Transaction Amount should be greater than zero', {position: toast.POSITION.BOTTOM_CENTER,autoClose:1000})
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

    toast.success('Transaction added successfully', {position: toast.POSITION.BOTTOM_CENTER,autoClose:2000})

  }

  return (
    <>
      <h3>NEW TRANSACTION</h3>
      
      <form onSubmit={onFormSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input type="text" value={newTransDesc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Transaction Description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<span> (Add + for Income & - for Expense)</span></label> 
          <input type="number" value={newTransAmount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Transaction Amount..." />
        </div>
        <button className="btn">ADD</button>
      </form>
    </>
  )
}