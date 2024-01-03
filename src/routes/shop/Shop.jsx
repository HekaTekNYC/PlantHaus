import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'
import ProductPage from '../product-page/product-page'
// import AllProducts from '../all-products/all-products'

import './shop.styles.scss'

const Shop = () => {
  return (
    <div className="shop-container">
      <Routes>
        <Route index element={<CategoriesPreview />} />


        <Route path=":category/" element={<CategoryPage />} />

        <Route path="product/:productName" element={<ProductPage />} />

      </Routes>
    </div>
  )
}

export default Shop
