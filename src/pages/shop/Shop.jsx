import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'

import './shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
      {/* this is the 4 items & header link*/}
      <Route index element={<CategoriesPreview />} />
      {/* this directs where the headre link will go  */}
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  )
}

export default Shop
