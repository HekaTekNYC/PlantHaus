import { createContext, useState } from 'react'
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from '../utils/firebase/firebase.utils'

import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  //   currentContext: null,
  //   setCurrentProduct: () => null,
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products }
  // signOutUser()

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChangedListener((user) => {
  //       if (user) {
  //         createUserDocumentFromAuth(user)
  //       }
  //       setProducts(user)
  //     })

  //     return unsubscribe
  //   }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
