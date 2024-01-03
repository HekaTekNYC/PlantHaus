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
    <div className="cart-item-line-container">
    <div className="cart-item-container">
      <div className="cart-item-image">
        <img src={thumbnailUrl} alt={`${name}`} />
      </div>
      <div className="cart-item-details-container">
        <div className="cart-item-details-row">
          <div className="cart-item-details">
            <div className="cart-item-name">{name}</div>
            {/* <div className="cart-item-size">Size: {size}</div> */}
            <div className="cart-item-size">Size: {size}</div>
          </div>
       
        </div>
        <div className="counter-price-container">
          <div className="counter-container">
    Quantity:
            {quantity}
 
          </div>
          <div className="cart-item-price">           
          ${price}            
          </div>
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default CheckoutItem
