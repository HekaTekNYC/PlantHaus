import { React, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import './product.styles.scss'

const Product = ({ product }) => {
  // const {
  //   name,
  //   price,
  //   imageUrl,
  //   description,
  //   care,
  //   icons,
  //   proTip,
  //   size_description,
  //   tags,
  //   thumbnailUrl,
  //   latinBinomial,
  // } = product
  console.log('product', product)
  // const sizeDescriptionArray = Object.entries(sizeDescription).map(([key, value]) => ({ [key]: value }));
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <>
      {/* <div className="product-card-container">
        <div className="product-img">
          <img src={imageUrl} alt={`${name}`} />
          <img src={thumbnailUrl} alt={`${name}`} />
        </div>
        <div>Name: {name}</div>
        <div>Price: {price.small}</div>

        <div>Description: {description}</div>
        <div>Care: {care}</div>
        <div>Icons: {icons}</div>
        <div>Pro Tip: {proTip}</div>
        <div>Size Description: {size_description}</div>
        {size_description.map((size) => (
          <div key={size.key}>{size.value}</div>
        ))}

        <div> Tags: {tags}</div>
        <div>Latin Binomial: {latinBinomial}</div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div> */}
    </>
  )
}

export default Product
