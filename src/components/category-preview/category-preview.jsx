import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import shopTitle from '../../utils/shopTitle.utils'
import ProductCard from '../product-card/product-card'
import { CategoriesContext } from '../../contexts/categories.context'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  const { category } = useParams();
  console.log('title in category preview', title)

  return (
    <div className="category-preview-container">
      <h2>
      <Link className="title" to={`/shop/${title}`}>          {/* This works to /shop/category */}
          {shopTitle(title)}
        </Link>
      </h2>
      <div className="preview">
        {products
          //filter out anything but the first four products. The underscore ignores the product.
          //_ titles and idx would be for the array of plants we want to display on the screen.
          .filter((_, idx) => idx < 4)
          //after we filter the 4 out we can then map through them
          .map((product) => (
            <ProductCard key={product.id} product={product} category={category}/>
          ))}
          {console.log('Category in CategoryPreview:', category)}
      </div>
    </div>
  )
}

export default CategoryPreview
