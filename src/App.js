import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './routes/home/Home'
import Shop from './routes/shop/Shop'
import About from './routes/about/About'
import Checkout from './routes/checkout/Checkout'
import Authentication from './routes/authentication/Authentication'
import SiteFooter from './components/footer/siteFooter'

import { scrollToTop } from './utils/scrollToTop'
import './index.scss'

const App = () => {
  const [isSvgLoaded, setIsSvgLoaded] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [location])

  const handleSvgLoad = () => {
    setIsSvgLoaded(true)
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home isSvgLoaded={isSvgLoaded} onSvgLoad={handleSvgLoad} />}
        />
        <Route path="auth" element={<Authentication navigate={navigate} />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <SiteFooter />
    </>
  )
}

export default App
