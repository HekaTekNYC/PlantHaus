import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../button/main-button/Button'

import './checkout-form.styles.scss'

const CheckoutForm = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <form className="checkout-form-container">
      <h4>Contact</h4>
      <div className="contact-checkout">
        <div className="form-group">
          <input
            type="email"
            placeholder="name@example.com"
            id="floatingInput"
            required
            autoComplete="off"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-check">
          <input type="checkbox" id="formGridCheckbox" />
          <label htmlFor="formGridCheckbox">
            Email me with news and offers
          </label>
        </div>
      </div>
      <div className="styled-line"></div>

      <h4>Delivery</h4>
      <div className="checkout-name">
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            id="formGridFirstName"
            required
            autoComplete="off"
          />
          <label htmlFor="formGridFirstName">First Name</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            id="formGridLastName"
            required
            autoComplete="off"
          />
          <label htmlFor="formGridLastName">Last Name</label>
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Address"
          id="formGridAddress1"
          required
          autoComplete="off"
        />
        <label htmlFor="formGridAddress1">Address</label>
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Apartment, studio, or floor"
          id="formGridAddress2"
        />
        <label htmlFor="formGridAddress2">Apt, Studio, or Floor</label>
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="City"
          id="formGridCity"
          required
          autoComplete="off"
        />
        <label htmlFor="formGridCity">City</label>
      </div>
      <div className="city-state">
        <div className="form-group-select">
          <select id="formGridState" required defaultValue="">
            <option value="" disabled hidden>
              Select State
            </option>
            <option value="1">AL</option>
            <option value="2">AK</option>
            <option value="3">AZ</option>
            <option value="4">AR</option>
            <option value="5">CA</option>
            <option value="6">CO</option>
            <option value="7">CT</option>
            <option value="8">DE</option>
            <option value="9">FL</option>
            <option value="10">GA</option>
            <option value="11">HI</option>
            <option value="12">ID</option>
            <option value="13">IL</option>
            <option value="14">IN</option>
            <option value="15">IA</option>
            <option value="16">KS</option>
            <option value="17">KY</option>
            <option value="18">LA</option>
            <option value="19">ME</option>
            <option value="20">MD</option>
            <option value="21">MA</option>
            <option value="22">MI</option>
            <option value="23">MN</option>
            <option value="24">MS</option>
            <option value="25">MO</option>
            <option value="26">MT</option>
            <option value="27">NE</option>
            <option value="28">NV</option>
            <option value="29">NH</option>
            <option value="30">NJ</option>
            <option value="31">NM</option>
            <option value="32" selected>
              NY
            </option>
            <option value="33">NC</option>
            <option value="34">ND</option>
            <option value="35">OH</option>
            <option value="36">OK</option>
            <option value="37">OR</option>
            <option value="38">PA</option>
            <option value="39">RI</option>
            <option value="40">SC</option>
            <option value="41">SD</option>
            <option value="42">TN</option>
            <option value="43">TX</option>
            <option value="44">UT</option>
            <option value="45">VT</option>
            <option value="46">VA</option>
            <option value="47">WA</option>
            <option value="48">WV</option>
            <option value="49">WI</option>
            <option value="50">WY</option>
          </select>
          <label htmlFor="formGridState">State</label>
        </div>
        <div className="form-group zip">
          <input
            type="text"
            placeholder="Zipcode"
            id="formGridZip"
            required
            autoComplete="off"
          />
          <label htmlFor="formGridZip">Zip</label>
        </div>
      </div>

      <div className="checkout-footer">
        <div onClick={toggleCartOpen} className="return-cart">
          <div className="cart-arrow">
            <IoIosArrowBack />
          </div>
          <div className="return-cart-text" onClick={toggleCartOpen}>
            Return To Cart
          </div>
        </div>
        <div className="shipping-btn">
          <Button variant="primary" type="submit">
            Continue To Shipping
          </Button>
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
