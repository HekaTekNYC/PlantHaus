import React, { useContext } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { CartContext } from '../../contexts/cart.context'

import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem
  const { clearItemFromCart } = useContext(CartContext)

  const removeItemFromCart = () => {
    clearItemFromCart(cartItem)
  }
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cart-image"></div>
      <div className="cart-item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <TfiClose onClick={removeItemFromCart} className="closeX" />
      <div className="cart-btns-remove"></div>
    </div>
  )
}

export default CartItem
