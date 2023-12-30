import React from 'react'
import { Link } from 'react-router-dom'
import shopTitle from '../../utils/shopTitle.utils'
import ProductCard from '../product-card/product-card'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  console.log('products in category preview', products)

  return (
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
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
