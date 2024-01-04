import React, { useState, useContext, useEffect } from 'react'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/main-button/Button'
import shopTitle from '../../utils/shopTitle.utils'

import './product.styles.scss'

const Product = ({ product }) => {
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
    latin_binomial,
  } = product

  // useEffect(() => {
  //   if (price && Object.keys(price).length > 0) {
  //     const firstSize = Object.keys(price)[0];
  //     const firstPrice = price[firstSize];
  //     setSelectedSize(firstSize);
  //     setSelectedPrice(firstPrice);
  //   }
  // }, [price]);

  const [selectedSize, setSelectedSize] = useState(Object.keys(price)[0])
  const [selectedPrice, setSelectedPrice] = useState(Object.values(price)[0])

  const { addItemToCart } = useContext(CartContext)
  // const addProductToCart = () => addItemToCart(product, selectedSize)

  const addProductToCart = () => {
    if (selectedSize) {
      addItemToCart(product, selectedSize)
    } else {
      console.log('Select your size before adding to cart!')
    }
  }
  const [selectedImage, setSelectedImage] = useState(imageUrl.img1)

  const selectOptionHandler = (size, price, index) => {
    setSelectedSize(size)
    setSelectedPrice(price)
    // setActiveIndex(index)
  }

  const handleThumbnailClick = (clickedThumbnail) => {
    const thumbnailKey = Object.keys(thumbnailUrl).find(
      (key) => thumbnailUrl[key] === clickedThumbnail
    )
    const imgMatch = thumbnailKey.match(/(\d+)(?=(?:-thumb)?\.[^.]*$|$)/)

    if (thumbnailKey === undefined) {
      console.error('thumbnail key not found:', clickedThumbnail)
    }

    const lastNumber = imgMatch[1]
    const fullSizeImageKey = Object.keys(imageUrl).find((key) =>
      key.includes(lastNumber)
    )
    const fullSizeImage = imageUrl[fullSizeImageKey]

    setSelectedImage(fullSizeImage)
  }

  useEffect(() => {}, [selectedImage])

  return (
    <div className="product-container">
      <div className="product-img-container">
        <div className="product-thumb-col">
          {thumbnailUrl &&
            Object.entries(thumbnailUrl).map(
              ([thumbnailKey, thumbnail], index) => (
                <div
                  className="product-thumb-container"
                  key={index}
                  onClick={() => handleThumbnailClick(thumbnail)}
                >
                  <img src={thumbnail} alt={`${name}`} loading="lazy" />
                </div>
              )
            )}
        </div>
        <div className="product-img-col">
          <img src={selectedImage} alt={`${name}`} />
        </div>
      </div>
      <div className="product-info-container">
        <div className="product-header">
          <span className="product-name">{name}</span>
          <div className="product-latin">{latin_binomial}</div>
          {/* <div className="product-price">${price && price.small}</div> */}
          <div className="product-price">${selectedPrice}</div>
        </div>
        <div className="product-size-container">
          <div className="product-size-subheader">Plant Size:</div>
          <div className="product-size-btns">
            {price &&
              Object.entries(price).map(([size, value]) => (
                <button
                  className="product-btn"
                  onClick={() => selectOptionHandler(size, value)}
                >
                  {shopTitle(size)}
                </button>
              ))}
          </div>

          <div className="product-size-description">
            {size_description &&
              Object.entries(size_description).map(([size, value]) => (
                <div className="size-description" key={size}>{`${shopTitle(
                  size
                )}: ${value}`}</div>
              ))}
            {/* console.log('Key Value Pairs in Product.jsx:', key, value) */}
          </div>

          <div className="product-cart-add">
            <Button buttonType="checkout" onClick={addProductToCart}>
              Add to cart
            </Button>
          </div>
        </div>

        <div className="styled-line"></div>

        <div className="product-icons-row">
          {icons &&
            icons.map((icon) => (
              <div className="plant-care-icons-container">
                <div className="plant-care-icon-container" key={icon.id}>
                  <img
                    src={icon.imageUrl}
                    className="plant-care-icon"
                    alt={icon.name}
                  />
                </div>

                <div className="plant-care-icon-name">{icon.name}</div>
              </div>
            ))}
        </div>
        <div className="styled-line"></div>
        <div className="product-paragraph">
          <div className="product-subheader">Description</div>
          <div>{description}</div>
        </div>
        <div className="product-paragraph">
          <div className="product-subheader">Plant Care</div>

          <div>{care}</div>
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
