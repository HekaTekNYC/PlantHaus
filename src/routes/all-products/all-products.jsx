import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'
import { CategoriesContext } from '../../contexts/categories.context'

const AllProducts = () => {
  const { products } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)

  const allProducts = Object.values(categoriesMap)
    .flatMap((category) => category)
    .filter((product) => product.tags.includes('all-products'))
  console.log('All Products', allProducts)

  return (
    <>
      <div className="category-title">
        <h2>All Products</h2>
      </div>
      <div className="category-container">
        {allProducts &&
          allProducts.map((product) => {
            const uniqueKey = product.id || `${product.name}-${product.price}` // Use a combination that ensures uniqueness
            console.log('Product ID:', uniqueKey)
            return <ProductCard key={uniqueKey} product={product} />
          })}
      </div>
    </>
  )
}

export default AllProducts
