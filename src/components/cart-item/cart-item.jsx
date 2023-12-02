import React, { useContext } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

import { CartContext } from '../../contexts/cart.context'

import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem

  const { clearAllItemsFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemsHandler = () => clearAllItemsFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <>
      <div className="cart-item-line-container">
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={imageUrl} alt={`${name}`} />
          </div>
          <div className="cart-item-details-container">
            <div className="cart-item-details-row">
              <div className="cart-item-details">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-size">Medium</div>
              </div>
              <div className="x-btn">
                <TfiClose onClick={clearItemsHandler} className="closeX" />
              </div>
            </div>
            <div className="counter-price-container">
              <div className="counter-container">
                <HiOutlineMinus
                  onClick={removeItemHandler}
                  className="cart-item-icon"
                />

                {quantity}
                <HiOutlinePlus
                  onClick={addItemHandler}
                  className="cart-item-icon"
                />
              </div>
              <div className="cart-item-price">${price}</div>
            </div>
          </div>
        </div>
        <div className="styled-line"></div>
      </div>
    </>
  )
}

export default CartItem
