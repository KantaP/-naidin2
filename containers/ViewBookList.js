import { connect } from 'react-redux'
import { addCart, incrementProduct, decrementProduct } from '../actions'
import BookList from '../components/BookList'

const mapStateToProps = (state) => {
  return {
    books: [
        {productId:1,title:'Harry Potter 1',path:'assets/img/harry1.jpg',price:100},
        {productId:2,title:'Harry Potter 2',path:'assets/img/harry2.jpg',price:100},
        {productId:3,title:'Harry Potter 3',path:'assets/img/harry3.jpg',price:100},
        {productId:4,title:'Harry Potter 4',path:'assets/img/harry4.jpg',price:100},
        {productId:5,title:'Harry Potter 5',path:'assets/img/harry5.jpg',price:100},
        {productId:6,title:'Harry Potter 6',path:'assets/img/harry6.jpg',price:100},
        {productId:7,title:'Harry Potter 7',path:'assets/img/harry7.jpg',price:100}
    ],
    carts: state.carts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (productId,price,title) => {
        dispatch(addCart(productId,price,title))
    },
    onIncrementClick: (productId) =>{
        dispatch(incrementProduct(productId))
    },
    onDecrementClick: (productId) =>{
        dispatch(decrementProduct(productId))
    }
  }
}

const ViewBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default ViewBookList