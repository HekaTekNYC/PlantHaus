import Button from '../button/Button'

import './cart-sidebar.styles.scss'

const CartSidebar = () => {
  return (
    <div className="cart-sidebar-container">
      <div className="cart-header">Your Cart</div>
      <div className="cart-info">
        Each order is meticulously prepared and packaged by our dedicated team!
        In the chilly winter season, additional protective packaging is included
        to ensure the safety of your plants.{' '}
      </div>
      <hr className="hr" />

      <div className="cart-items"></div>
      <div className="subtotal">Subtotal</div>
      <div className="shipping">Shipping</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartSidebar
