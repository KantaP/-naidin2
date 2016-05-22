import React , { PropTypes } from 'react'
import Book from './Book'

const display = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const BookList = ({ books , carts , onAddClick , onIncrementClick , onDecrementClick  }) => {
    return <div className="mdl-cell mdl-cell--8-col mdl-cell--2-offset"  style={display}>
    {
        books.map((d,index)=>{
            return <Book 
                key={index}
                title={d.title}
                price={d.price}
                productId={d.productId}
                imagePath={d.path}
                onAddClick={() => {
                    let exist = carts.find(c =>{
                        return c.productId === d.productId
                    })
                    if(exist) onIncrementClick(d.productId)
                    else onAddClick(d.productId,d.price,d.title)
                }}
                onDecrementClick={() => onDecrementClick(d.productId)}
            />
        })
    }
    </div>
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    imagePath: PropTypes.string,
  }).isRequired).isRequired,
  carts: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired
}

export default BookList