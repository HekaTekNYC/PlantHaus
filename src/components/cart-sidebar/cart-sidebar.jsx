import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { TfiClose } from 'react-icons/tfi'
import CheckoutItem from '../checkout-item/checkout-item'
import Button from '../button/Button'
import CartItem from '../cart-item/cart-item'

import './cart-sidebar.styles.scss'

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, clearItemFromCart, cartItems, cartTotal } =
    useContext(CartContext)
  const toggleCartClosed = () => setIsCartOpen(!isCartOpen)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-sidebar-container">
      <div className="cart-header-container">
        <div className="x-container">
          <TfiClose onClick={toggleCartClosed} className="closeX" />
        </div>
        <div className="title-amount">
          <h2 className="cart-title">Your Cart</h2>
          <div className="item-count">4 items</div>
        </div>

        <div className="cart-info">
          Each order is meticulously prepared and packaged by our dedicated
          team! In the chilly winter season, additional protective packaging is
          included to ensure the safety of your plants.
        </div>
        <div className="styled-line"></div>
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="cart-footer">
        <div className="subtotal-container">
          <div className="total">Subtotal: </div>
          <span>${cartTotal}</span>
        </div>

        <Button onClick={goToCheckoutHandler}>Checkout Page</Button>
        <div className="shipping">
          Taxes and shipping calculated at checkout.
        </div>
      </div>
    </div>
  )
}

export default CartSidebar
