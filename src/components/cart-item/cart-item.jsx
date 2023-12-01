import React, { useContext } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

import { CartContext } from '../../contexts/cart.context'

import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem
  const { clearItemFromCart } = useContext(CartContext)

  const removeItemFromCart = () => {
    clearItemFromCart(cartItem)
  }
  return (
    <>
      <div className="cart-item-container">
        <div className="cart-image">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <div className="cart-item-details-container">
          <div className="cart-item-details-row">
            <div className="cart-item-details">
              <div className="name">{name}</div>
              <div className="size">Medium</div>
            </div>
            <div className="x-btn">
              <TfiClose onClick={removeItemFromCart} className="closeX" />
            </div>
          </div>
          <div className="counter-price-container">
            <div className="counter-container">
              <HiOutlinePlus className="cart-icon" />
              {quantity}
              <HiOutlineMinus className="cart-icon" />
            </div>
            <div className="price">${price}</div>
          </div>
        </div>
      </div>
      <div className="styled-line"></div>
    </>
  )
}

export default CartItem
