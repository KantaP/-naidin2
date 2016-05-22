import { connect } from 'react-redux'
import CartList from '../components/CartList'

const mapStateToProps = (state) => {
  return {
    carts: state.carts
  }
}

const ViewCartList = connect(
  mapStateToProps
)(CartList)

export default ViewCartList