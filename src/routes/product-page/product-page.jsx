import React, { useContext} from 'react'
import Product from '../../components/product/product'
import { CategoriesContext } from '../../contexts/categories.context'
import './product-page.styles.scss'

const ProductPage = () => {

  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className="product-page-container">

{Object.keys(categoriesMap).map((title) => {
  
        const products = categoriesMap[title]
        return <Product key={title} title={title} product={products} />
      })}
    </div>
    
  )
}

export default ProductPage
