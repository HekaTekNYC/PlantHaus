import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './routes/home/Home'
import Shop from './routes/shop/Shop'

import About from './routes/about/About'
import Checkout from './routes/checkout/Checkout'
import Authentication from './routes/authentication/Authentication'
import './index.scss'

const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication navigate={navigate} />} />

          <Route path="shop/*" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
