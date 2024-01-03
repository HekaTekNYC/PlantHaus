import { useState } from 'react'

import FormInput from '../form-input/Form-input'
import Button from '../button/main-button/Button'



import './checkout-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  email: '',
  creditCardNum: '',
  ccExp: '',
  cvv: '',
}

const CheckoutForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, firstName, lastName, address, city, state, zipCode, creditCardNum, ccExp, cvv } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">

      <form >
        <div>Contact</div>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <div className="styled-line"></div>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Address"
          type="text"
          required
          onChange={handleChange}
          name="address"
          value={address}
        />

        <FormInput
          label="City"
          type="text"
          required
          onChange={handleChange}
          name="city"
          value={city}
        
        />

        <Button buttonType="inverted" type="submit">
         Purchase
        </Button>
      </form>
    </div>
  )
}

export default CheckoutForm
