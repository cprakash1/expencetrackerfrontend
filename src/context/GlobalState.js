import React, { createContext, useReducer } from "react";
import axios from 'axios';
import AppReducer from './AppReducer'
//Initail State
const initialState = {
  transactions: [],
  loading: false,
  error: null
};

//craeting context
export const GlobalContext = createContext(initialState);


//Provider Component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    async function deleteTransaction(id){

        try{
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            });
            await axios.delete(`https://expencecp.onrender.com/api/v1/transactions//${id}`);
            // console.log(response);
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });

        }

    }
    async function addTransaction(transaction){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const response= await axios.post('https://expencecp.onrender.com/api/v1/transactions/',transaction,config);
            // console.log(response)
            dispatch({
                type:"ADD_TRANSACTION",
                payload:response.data.data
            })
        }catch(e){
            console.log(e)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: e.response.data.error
            });
        }
    };
    async function getTransaction(){
        state.loading = true;
        try{
            const response = await axios.get("https://expencecp.onrender.com/api/v1/transactions/");
            // console.log(response.data.data);
            dispatch({
                type:"GET_TRANSACTIONS",
                payload:response.data.data
            })
        }catch(err){
            console.log(err)
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error
            });
        }
    }

    return(<GlobalContext.Provider 
        value={{
                transactions:state.transactions,
                deleteTransaction,
                addTransaction,
                loading:state.loading,
                error:state.error,
                getTransaction
            }}>
            {children}
        </GlobalContext.Provider>)
}