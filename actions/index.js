export const addCart = (productId,price,title) => {
  return {
        type: 'ADD_CART',
        productId,
        price,
        title
  }
}

export const incrementProduct = (productId) => {
  return {
        type: 'INCREMENT_PRODUCT',
        productId
  }
}

export const decrementProduct = (productId) => {
    return{
        type: 'DECREMENT_PRODUCT',
        productId
    }
}

export const getTotalPrice = () => {
    return{
        type: 'GET_TOTAL_PRICE'
    }
}

export const checkOut = () =>{
    return{
        type: 'CHECK_OUT'
    }
}