import React,{useState,useEffect,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);
    // useEffect(()=>{
    //     console.log(text);
    // },[text]);
    // useEffect(()=>{
    //     console.log(amount);
    // },[amount]);
    const {addTransaction}=useContext(GlobalContext);
    // console.log(addTransaction)
    const id=15;
    const onSubmit=(e)=>{
      e.preventDefault();
      const newTransaction={
        id:Math.floor(Math.random()*1000000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..." onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} placeholder="Enter amount..." onChange={(e)=>setAmount((e.target.value))}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
