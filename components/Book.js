import React , { PropTypes } from 'react'

const Book = ({ title, price, productId, imagePath, onAddClick, onDecrementClick }) => {
    let background = {
        background: `url(../${imagePath}) bottom 50% right 10% no-repeat #FFC200`
    }
    return <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand" style={background}>
            <h2 className="mdl-card__title-text">{title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
            <span className="pull-left">Price : {price} THB</span>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab pull-right mdl-deep-orange"
            onClick={onDecrementClick}>
                <i className="material-icons">remove</i>
            </button>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab pull-right mdl-deep-orange"
            onClick={onAddClick}>
                <i className="material-icons">add</i>
            </button>
        </div>
    </div>
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    imagePath: PropTypes.string,
    onAddClick: PropTypes.func.isRequired,
    onDecrementClick: PropTypes.func.isRequired
}

export default Book