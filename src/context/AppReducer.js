//It's basically how specifies the application state shanges in response to certain actions 

export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.transId !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }