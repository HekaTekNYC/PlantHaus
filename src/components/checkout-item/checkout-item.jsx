import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)

  const dataEx = [
    {
      id: 1
    },
    {
      id: 2
    },
  ]

  return (
    <div className="checkout-item-container item-separator">
      <div className="image-container">
        <div className="item-separator">
          <img src={imageUrl} alt={`${name}`} />
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
    </div>
  )
}

export default CheckoutItem
