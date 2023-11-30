import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import Checkout from './pages/checkout/Checkout'
import Authentication from './pages/authentication/Authentication'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* find out how to do a nested route on home */}
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
