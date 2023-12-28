import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import './product.styles.scss'

const Product = ({ product }) => {
  // console.log('Product Data:', product)
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
  // console.log('price in product: ')
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)
//initial state may be used incorrectly?
  const [selectedImage, setSelectedImage] = useState(imageUrl.img1)

  const handleThumbnailClick = (clickedThumbnail) => {
    //Here we use the Object.keys method from thumbnailUrl object
    //then we used the find method to find the matching key fo rthe clicked item
    const thumbnailKey = Object.keys(thumbnailUrl).find(
      (key) => thumbnailUrl[key] === clickedThumbnail
    )
    console.log('Clicked Thumbnail Key:', thumbnailKey);
 if(thumbnailKey === undefined) {
  console.error('thumbnail key not found:', clickedThumbnail)
 }
    // this is searching through ALL imageUrls
    const fullSizeImage = imageUrl[thumbnailKey.replace('thumb', 'img')]
    console.log('Full Size Image:', fullSizeImage);

    //set the fullsize image to the selectedImage
    //then we use the fullSizeImage key to access the full size image from our imageUrl obj.
    console.log('ThumbnailUrl Clicked', thumbnailUrl)
    console.log('selectedImage:', selectedImage)
    //we set fullSizeImage asthe value for selected image
    setSelectedImage(fullSizeImage)
    
  }
  //I wasn't getting the corresponding images when clicking to enlarge the view. I noticed that my console.log's on teh selectedImage wasn't showing an updated state. It identified the key and fullsize image but selected image still showed a previous state.
  // useEffect(() => {
  //   const updatedImg = 
  //   console.log('selectedImage:', selectedImage);
  // }, [selectedImage]);

  return (    <div className="product-container">
      <div className="product-img-container">
        <div className="product-thumb-col">
          {thumbnailUrl &&
            Object.entries(thumbnailUrl).map(
              ([thumbnailKey, thumbnail], index) => (
             
                <div
                  className="product-thumb-container"
                  key={index}
                  onClick={() => handleThumbnailClick(thumbnail) }
                  
                  >
                    {   console.log('thumbnail', thumbnail)}
                  <img src={thumbnail} alt={`${name}`} loading='lazy'/>
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
              <React.Fragment key={icon.id}>
                <div>{icon.name}</div>
                <div>{icon.imageUrl}</div>
              </React.Fragment>
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
