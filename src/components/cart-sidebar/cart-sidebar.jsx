import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { TfiClose } from 'react-icons/tfi'

import Button from '../button/Button'
import CartItem from '../cart-item/cart-item'

import './cart-sidebar.styles.scss'

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext)
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
        <h2 className="cart-title">Your Cart</h2>
      </div>

      <div className="cart-info">
        Each order is meticulously prepared and packaged by our dedicated team!
        In the chilly winter season, additional protective packaging is included
        to ensure the safety of your plants.{' '}
      </div>
      <hr className="hr" />

      <div className="cart-items"></div>

      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <div className="subtotal">Subtotal</div>
      <div className="shipping">Shipping</div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartSidebar
