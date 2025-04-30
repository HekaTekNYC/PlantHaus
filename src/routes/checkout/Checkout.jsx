import { lazy, Suspense, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import Button from '../../components/button/main-button/Button'
import './checkout.styles.scss'

const CheckoutForm = lazy(() =>
  import('../../components/checkout-form/checkout-form')
)

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className="checkout-page">
      <div className="checkout-page-container">
        <div className="checkout-form">
          <Suspense fallback={<div>Loading...</div>}>
            <CheckoutForm />
          </Suspense>
        </div>
        <div className="checkout-container">
          <h4>Order Summary</h4>

          <div className="checkout-items">
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="discount-row">
              <input
                type="text"
                placeholder="Discount Code"
                className="discount-input"
              />

              <div className="discount-btn">
                <Button buttonType="checkout" type="submit">
                  Submit
                </Button>
              </div>
            </div>
            <div className="subtotal-row">
              <div className="subtotal">Subtotal</div>
              <div className="subtotal-text">${cartTotal}</div>
            </div>
            <div className="shipping-row">
              <div className="shipping">Shipping</div>
              <div className="shipping-text">Caluclated at next step</div>
            </div>

            <div className="total-container">
              <div className="styled-line"></div>
              <div className="total-row">
                <div className="total">Total</div>
                <div className="total-text">${cartTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
