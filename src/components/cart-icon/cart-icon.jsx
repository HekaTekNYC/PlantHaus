import './cart-icon.styles.scss'
import { PiBagSimpleLight } from 'react-icons/pi'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <PiBagSimpleLight className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
//close with 'x' button
//create button
//create the onclick handler
//add onClick to the btn component

//I want to target the toggle(!isCartOpen)

//close on reload

//close when clicking off of the shopping cart component
