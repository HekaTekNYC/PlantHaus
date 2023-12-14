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
    pro_tip,
    size_description,
    thumbnailUrl,
    latinBinomial,
  } = product
  console.log('price in product: ')
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-container">
      <div className="product-img-container">
        {/* <div className='product-thumb' */}
        <div className="product-thumb-col">
          {thumbnailUrl &&
            Object.values(thumbnailUrl).map((thumbnail, index) => (
              <div className="product-thumb-container">
                <img key={index} src={thumbnail} alt={`${name}`} />
              </div>
            ))}
        </div>
        <div className="product-img-col">
          <img src={imageUrl.img1} alt={`${name}`} />
        </div>
      </div>
      <div className="product-info-container">
        <div className="product-header">
          <div className="product-name">{name}</div>
          <div className="product-price">{price && price.small}</div>
        </div>
        <div className="product-size">
          Size Description:
          {size_description &&
            Object.entries(size_description).map(([size, value]) => (
              <div key={size}>{`${size}: ${value}`}</div>
            ))}
        </div>
        <div className="cart-add">
          <Button buttonType="inverted" onClick={addProductToCart}>
            Add to cart
          </Button>
        </div>
        <div className="styled-line"></div>
        <div className="product-icons">
          Icons:
          {icons &&
            icons.map((icon) => (
              <>
                <div>{icon.name}</div>
                console.log('icons:', icons)
                <div>{icon.imageUrl}</div>
              </>
            ))}
        </div>
        <div className="styled-line"></div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="product-care">
          <h3>Care:</h3>
          <div className="product-latin">{latinBinomial}</div>
          <p>{care}</p>
          <div>
            <span className="pro-tip">Pro Tip: </span>
            {pro_tip}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
