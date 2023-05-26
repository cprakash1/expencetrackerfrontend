export default (state,action)=>{
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
                loading: false,
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(e=>(e._id!==action.payload)),
            }
        case 'ADD_TRANSACTION':
            return {
              ...state,
                transactions: [...state.transactions, action.payload],
            }
        default:
            return state;
    }
}
