import { Routes, Route, useLocation } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'
import ProductPage from '../product-page/product-page'

import './shop.styles.scss'

const Shop = () => {
  const location = useLocation()

  const isShopPage =
    location.pathname.startsWith('/shop') || location.pathname === '/shop/'

  return (
    <div className="shop-container">
      {isShopPage && <div className="mobile-buttons"></div>}

      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category/" element={<CategoryPage />} />
        <Route path="product/:productName" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default Shop
