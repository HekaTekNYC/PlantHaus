import { useContext, useEffect } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
  const { name, thumbnailUrl, price, quantity, size } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemToCart, setIsCartOpen } =
    useContext(CartContext)
useEffect(() => {
  setIsCartOpen(false)
}, [])
  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem, size)
  const removeItemHandler = () => removeItemToCart(cartItem, size)
  console.log('thumbnailUrl inside checkout item', thumbnailUrl)


  return (
    <div className="checkout-item-container">
      <div className="checkout-image-container">
        
        <img className="checkout-img" src={thumbnailUrl} alt={`${name}`} />
      </div>
        <span className="name"> {name} </span>
        <span className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="price"> {price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
        {/* <hr className="item-separator" /> */}
  
    </div>
  )
}

export default CheckoutItem
