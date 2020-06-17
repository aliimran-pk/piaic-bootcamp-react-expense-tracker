//It's basically how specifies the application state shanges in response to certain actions 

export default (state, action) => {
    switch(action.type) {
        //Send down all the transactions except the value to delete
        case 'DELETE_TRANSACTION':
            return {
                ...state,  //spread operator
                transactions: state.transactions.filter(trasanction => trasanction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, //initial state by spread operator ...
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}