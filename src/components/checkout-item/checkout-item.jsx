import './checkout-item.styles.scss'
import shopTitle from '../../utils/shopTitle.utils'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
  const { name, thumbnailUrl, price, quantity, size } = cartItem
  const { setIsCartOpen } = useContext(CartContext)
  useEffect(() => {
    setIsCartOpen(false)
  }, [setIsCartOpen])
  return (
    <div className="checkout-item-line-container">
      <div className="checkout-item-container">
        <div className="checkout-item-image">
          <img src={thumbnailUrl} alt={`Thumbnail of ${name}`} />
        </div>
        <div className="checkout-item-details-container">
          <div className="checkout-item-details-row">
            <p className="checkout-item">
              {name}, <span>{shopTitle(size)}</span>{' '}
            </p>

            <p className="checkout-item-price">${price}</p>
          </div>

          <div className="quantity-container">
            Quantity: {quantity} {quantity === 1 ? 'item' : 'items'}
          </div>
        </div>
      </div>
      <div className="styled-line-thin"></div>
    </div>
  )
}

export default CheckoutItem
