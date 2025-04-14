import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'
import ProductPage from '../product-page/product-page'

import './shop.styles.scss'

const Shop = () => {
  return (
    <div className="shop-container">
      <Routes>
        <Route
          index
          element={
            <>
              <div className="shop-page-header">
                <img
                  src="/images/monstera-light.png"
                  alt="light green monstera leaf"
                  className="shop-img"
                />
                <h2>Green Looks Good on You</h2>
                <p>
                  Explore our full collection of plants that thrive in your
                  space — and your lifestyle.
                </p>
              </div>
              <CategoriesPreview />
            </>
          }
        />
        <Route path=":category/" element={<CategoryPage />} />
        <Route path="product/:productName" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default Shop
