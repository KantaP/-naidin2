const cart = (state , action) =>{
    switch (action.type) {
        case 'INCREMENT_PRODUCT':
            if(state.productId !== action.productId){
                return state
            }
            return Object.assign({},state,{amount: state.amount +1});
        case 'DECREMENT_PRODUCT':
            if(state.productId !== action.productId){
                return state
            }
            return Object.assign({},state,{amount: state.amount -1});
        default:
            return state
    }
}

const carts = (state = [] , action) =>{
    switch (action.type) {
        case 'ADD_CART':
            return [
                    ...state,
                    {
                        productId: action.productId,
                        price: action.price,
                        title: action.title,
                        amount: 1
                    }
                ] 
        case 'INCREMENT_PRODUCT':
            return state.map(c => cart(c,action))
        case 'DECREMENT_PRODUCT':
            return state.map(c => cart(c,action))
        default:
            return state
    }    
}

export default carts