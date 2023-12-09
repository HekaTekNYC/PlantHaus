import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'
import ProductPage from '../product-page/product-page'
import AllProducts from '../all-products/all-products'
import './shop.styles.scss'

const Shop = () => {
  return (
    <>
      <div className="shop-container">
        <Routes>
          {/* this is the 4 items & header link*/}
          {/* This is the same as /Shop it just loads all category previews */}
          <Route index element={<CategoriesPreview />} />
          {/* this goes to shop/ whatever category is chosen on the categorypage */}
          {/* /shop/category/product-name */}
          <Route path=":category" element={<CategoryPage />} />
          {/* <Route path=":all-products" element={<AllProducts />} /> */}
          <Route path="all-products/*" element={<AllProducts />} />
          {/* <Route index element={<AllProducts />} /> */}
          {/* /shop/product-name */}
          <Route path=":name" element={<ProductPage />} />

          {/* <Route path="/categories/:categoryTitle" element={<CategoryPage />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default Shop
