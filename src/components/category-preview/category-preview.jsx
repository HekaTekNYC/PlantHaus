import React from 'react'
import { Link } from 'react-router-dom'
import shopTitle from '../../utils/shopTitle.utils'
import ProductCard from '../product-card/product-card'
import { IoIosArrowForward } from 'react-icons/io'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  console.log('products in category preview', products)

  return (
    <>
      <div className="category-preview-container">
        <h2>
          <Link className="title" to={`/shop/${title}`}>
            {shopTitle(title)}
          </Link>
        </h2>

        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <div className="product-wrapper" key={product.id}>
                <ProductCard product={product} />
                <div className="category-overlay">
                  <Link className="title" to={`/shop/${title}`}>
                    <h3>{shopTitle(title)}</h3>
                  </Link>
                </div>
              </div>
            ))}
          <Link className="title" to={`/shop/${title}`}>
            <div className="view-more-card">
              <div className="view-more-text">
                View <br />
                More
                <div className="arrow-icon">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategoryPreview
