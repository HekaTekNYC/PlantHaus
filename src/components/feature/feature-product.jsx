import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import shopTitle from '../../utils/shopTitle.utils'

import { BsArrowRight } from 'react-icons/bs'

import './feature-product.styles.scss'

const FeatureProduct = ({ product }) => {
  const {
    name,
    imageUrl,
    thumbnailUrl,
    description,
    size_description,
    latin_binomial,
  } = product
  const plantName = name.toLowerCase().split(' ').join('-')
  const nameMatch = name
  const img1 = imageUrl.img1

  const [selectedImage, setSelectedImage] = useState(img1)

  //Thumbnail Image handling
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
    <>
      <div className="feature-container">
        <img
          src="/images/banana-green.svg"
          alt="green banana leaf"
          className="feature-banana"
        />
        <img
          src="/images/palm2-ash.svg"
          alt="light green palm leaf"
          className="feature-palm"
        />
        <div className="feature-header-sm">
          <div className="feature-plant-eyebrow">THIS WEEKS FEATURED PLANT</div>
          <h3 className="feature-name">{name}</h3>
          <div className="feature-latin">{latin_binomial}</div>
        </div>
        <div className="feature-img-container">
          <div className="feature-thumb-col">
            {thumbnailUrl &&
              Object.entries(thumbnailUrl).map(
                ([thumbnailKey, thumbnail], index) =>
                  (index === 0 || index === 2) && (
                    <div
                      className="feature-thumb-container"
                      key={index}
                      onClick={() => handleThumbnailClick(thumbnail)}
                    >
                      <img src={thumbnail} alt={`${name}`} loading="lazy" />
                    </div>
                  )
              )}
          </div>
          <div className="feature-img-col">
            <img src={selectedImage} alt={`${name}`} />
          </div>
        </div>
        <div className="feature-items">
          <div className="feature-header-lg">
            <div className="feature-plant-eyebrow">
              THIS WEEKS FEATURED PLANT
            </div>
            <h3 className="feature-name">{name}</h3>
            <div className="feature-latin">{latin_binomial}</div>
          </div>
          <div className="feature-info-container">
            <div className="styled-line top-line"></div>
            <div className="feature-price">Starting at $32</div>
            <div className="feature-size-description">
              {' '}
              {size_description &&
                Object.entries(size_description).map(([size, value]) => (
                  <div className="size-description" key={size}>{`${shopTitle(
                    size
                  )}: ${value}`}</div>
                ))}
            </div>
            <div className="feature-description">{description}</div>
            <div className="styled-line"></div>

            <Link
              to={`/shop/product/${plantName}`}
              state={{ nameMatch }}
              className="go-to-product"
              aria-label={`View full details for ${plantName}`}
            >
              View Full Details
              <div className="arrow">
                <BsArrowRight />
              </div>
            </Link>
            <div className="styled-line"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureProduct
