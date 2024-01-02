import React, { useContext, useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

import { CartContext } from '../../contexts/cart.context'

import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, thumbnailUrl, price } = cartItem
  const { clearAllItemsFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemsHandler = () => clearAllItemsFromCart(cartItem)
  const addItemHandler = () => addItemToCart({...cartItem, selectedSize})
  const removeItemHandler = () => removeItemFromCart(cartItem)
  // const selectedItem = price.find((amount) => amount.size === size)
  const thumb = thumbnailUrl.thumb1
  // Get all available sizes from the item's price object
  const availableSizes = Object.keys(price);

  // State to track the selected size
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);

  // Get the price for the selected size
  const selectedPrice = price[selectedSize];

  
  return (
    <>
      <div className="cart-item-line-container">
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={thumb} alt={`${name}`} />
          </div>
          <div className="cart-item-details-container">
            <div className="cart-item-details-row">
              <div className="cart-item-details">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-size">Size: {selectedSize}</div>
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
                  onClick={addItemHandler(selectedSize)}
                  className="cart-item-icon"
                />
              </div>
              {/* <div className="cart-item-price">${price}</div> */}
              <div className="cart-item-price">
              ${price[selectedSize]}
                {/* {Object.entries(price).map(([size, value]) => (
                  <span key={size}>
                    {size}: ${value}{' '}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        <div className="styled-line"></div>
      </div>
    </>
  )
}

export default CartItem
