import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'

import './shop.styles.scss'

const Shop = () => {
  return (
    <>
      <div className="shop-container">
        <Routes>
          {/* this is the 4 items & header link*/}
          <Route index element={<CategoriesPreview />} />
          {/* this directs where the header link will go  */}
          {/* <Route path=":view-all" element={<ViewAllPage />} /> */}
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":plant-page" element={<CategoryPage />} />

          {/* <Route path="/categories/:categoryTitle" element={<CategoryPage />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default Shop
