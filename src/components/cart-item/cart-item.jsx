import React, { useContext } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import shopTitle from '../../utils/shopTitle.utils'
import { CartContext } from '../../contexts/cart.context'

import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, thumbnailUrl, price, size } = cartItem

  const { clearAllItemsFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemsHandler = () => clearAllItemsFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem, size)
  const removeItemHandler = () => removeItemFromCart(cartItem, size)

  return (
    <>
      <div className="cart-item-line-container">
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={thumbnailUrl} alt={`${name}`} />
          </div>
          <div className="cart-item-details-container">
            <div className="cart-item-details-row">
              <div className="cart-item-details">
                <div className="cart-item-name">{name}</div>

                <div className="cart-item-size">Size: {shopTitle(size)}</div>
              </div>
              <div className="x-btn">
                <TfiClose
                  onClick={clearItemsHandler}
                  className="closeX"
                  role="button"
                  aria-label="Close cart"
                />
              </div>
            </div>
            <div className="counter-price-container">
              <div className="counter-container">
                <HiOutlineMinus
                  onClick={quantity > 1 ? removeItemHandler : undefined}
                  className={`cart-item-icon ${
                    quantity <= 1 ? 'disabled' : ''
                  }`}
                  role="button"
                  aria-label="Decrease quantity"
                />
                {quantity}
                <HiOutlinePlus
                  onClick={addItemHandler}
                  className="cart-item-icon"
                  role="button"
                  aria-label="Increase quantity"
                />
              </div>
              <div className="cart-item-price">${price.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className="styled-line"></div>
      </div>
    </>
  )
}

export default CartItem
