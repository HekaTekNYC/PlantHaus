import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './routes/home/Home'
import Shop from './routes/shop/Shop'
import About from './routes/about/About'
import Checkout from './routes/checkout/Checkout'
import Authentication from './routes/authentication/Authentication'
import SiteFooter from './components/footer/siteFooter'
import './index.scss'

const App = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
