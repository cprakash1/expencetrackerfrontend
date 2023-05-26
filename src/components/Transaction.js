import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../comma'


const Transaction = ({transaction}) => {
  const {deleteTransaction}=useContext(GlobalContext)
  // console.log(deleteTransaction)
  return (
    <div>
      <li className={transaction.amount>0?"plus":"minus"}>
          {transaction.text} <span>{transaction.amount>0?"+":"-"}${numberWithCommas(Math.abs(transaction.amount))}</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction._id)}>x</button>
        </li>
    </div>
  )
}

export default Transaction
