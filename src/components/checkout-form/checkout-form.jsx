import { useState } from 'react'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { IoIosArrowBack } from "react-icons/io";


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
  country: '',
}

const CheckoutForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const { isCartOpen, setIsCartOpen,  } =
  useContext(CartContext)

const toggleCartClosed = () => setIsCartOpen(isCartOpen)


  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="checkout-form-container">
 <Form>

        <h4 className="my-3">Contact</h4>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        >
        <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Email me with news and offers" />
      </Form.Group>
      <div className="styled-line"></div>

      <h4 className="mt-5 mb-3">Delivery</h4>
      <Row>
      <Form.Group as={Col} controlId="formGridFirstName">
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="First Name" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridLastName">
      <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="Last Name" />
        </FloatingLabel>
      </Form.Group>
        </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
      <FloatingLabel
        controlId="floatingInput"
        label="Address"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="Address" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
      <FloatingLabel
        controlId="floatingInput"
        label="Apartment, studio, or floor"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="Apartment, studio, or floor" />
        </FloatingLabel>
      </Form.Group>
<Row>
      <Form.Group as={Col} controlId="formGridCity">
      <FloatingLabel
        controlId="floatingInput"
        label="City"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="City" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
      <FloatingLabel controlId="floatingSelect" label="select state">
      <Form.Select aria-label="select state">
        <option value="1">New York</option>
        <option value="2">...</option>
      </Form.Select>
      </FloatingLabel>
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridZip">
      <FloatingLabel
        controlId="floatingInput"
        label="Zip"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="Zipcode" />
        </FloatingLabel>
      </Form.Group>
      </Row>
    <div className="checkout-footer"> 
      <div onClick={toggleCartClosed} className="return-cart">
        <div classname="cartarrow"><IoIosArrowBack /></div> 
        <div className="return-cart-text">Return To Cart</div>
      </div>
      <div className="shipping-btn">
        <Button variant="primary" type="submit">
          Continue to Shipping
        </Button>
      </div>
    </div>
    </Form>
    </div>
  )
}

export default CheckoutForm
