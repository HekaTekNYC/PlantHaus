import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './routes/home/Home'
import Shop from './routes/shop/Shop'
import AllProducts from './routes/all-products/all-products'
import ProductPage from './routes/product-page/product-page'
import About from './routes/about/About'
import Checkout from './routes/checkout/Checkout'
import Authentication from './routes/authentication/Authentication'
import CategoriesPreview from './routes/reviews/reviews'
import CategoryPage from './routes/category-page/category-page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route path="shop/*" element={<Shop />} />
          {/* <Route path="category" element={<CategoriesPreview />} /> */}
          {/* <Route path=":category" element={<CategoryPage />} />
          </Route> */}

          <Route path="auth" element={<Authentication />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="all-products/*" element={<AllProducts />} /> */}
          {/* <Route path="product/:productId" element={<ProductPage />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
