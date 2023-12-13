import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import './product.styles.scss'

const Product = ({ product }) => {
  console.log('Product Data:', product)
  const {
    name,
    price,
    imageUrl,
    description,
    care,
    icons,
    proTip,
    size_description,
    tags,
    thumbnailUrl,
    latinBinomial,
  } = product

  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="product-img">
        <img src={imageUrl} alt={`${name}`} />
        <img src={thumbnailUrl} alt={`${name}`} />
      </div>
      <div>Name: {name}</div>
      <div>Price: {price && price.small}</div>

      <div>Description: {description}</div>
      <div>Care: {care}</div>
      <div>Icons: {icons}</div>
      <div>Pro Tip: {proTip}</div>
      <div>
        Size Description:
        {size_description &&
          Object.entries(size_description).map(([size, value]) => (
            <div key={size}>{`${size}: ${value}`}</div>
          ))}
      </div>

      <div>Tags: {tags}</div>
      <div>Latin Binomial: {latinBinomial}</div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  )
}

export default Product
