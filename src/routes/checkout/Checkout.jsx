import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutForm from '../../components/checkout-form/checkout-form'

import CheckoutItem from '../../components/checkout-item/checkout-item'

import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className="checkout-page-container">
    <div className="checkout-form">
    <CheckoutForm/>
    </div>
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
    </div>
  )
}

export default Checkout
