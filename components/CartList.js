import React , { PropTypes } from 'react';

const CartList = ({ carts }) => {
    let margin = {
        marginRight:10
    }
    let sumtotals = 0;
    let discount = (carts.length - 1) * 10;
    let newtotals = carts.map(n => (n.amount * n.price) - (((n.amount * n.price) * discount) / 100));
    for(let p of newtotals){
        sumtotals += p ;
    }
    return <div className="mdl-cell mdl-cell--8-col mdl-cell--2-offset">
                <h1>Harry Potter Sells</h1>
                <div>
                    <div id="sc" className="icon material-icons pull-left" style={margin}>
                        add_shopping_cart
                    </div>
                    <div className="mdl-tooltip" htmlFor="sc">
                        <ul className="demo-list-icon mdl-list">
                            {
                                carts.map((c,index)=>{
                                    return <li className="mdl-list__item" key={c.productId}>
                                            <span className="mdl-list__item-primary-content">
                                                <i className="material-icons mdl-list__item-icon">book</i>
                                                {c.title}
                                            </span>
                                            <span className="mdl-list__item-sub-title">{c.amount} copies</span>
                                           </li>
                                })
                            }
                        </ul>
                    </div>
                    <h4>{sumtotals} THB</h4>
                </div>   
            </div>
}

CartList.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        productId: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired).isRequired,
}

export default CartList