import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReviewsProvider } from './contexts/reviews.context.jsx'
import App from './App'
import { UserProvider } from './contexts/user.context.jsx'
import { CategoriesProvider } from './contexts/categories.context.jsx'
import { CartProvider } from './contexts/cart.context.jsx'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ReviewsProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </ReviewsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
