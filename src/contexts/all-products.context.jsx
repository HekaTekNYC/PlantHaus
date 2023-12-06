import { createContext, useState, useEffect } from 'react'
import { getAllProductsAndDocuments } from '../utils/firebase/firebase.utils.jsx'

export const allProductsContext = createContext({
  allProductsMap: {},
})

export const AllProductsProvider = ({ children }) => {
  const [allProductsMap, setAllProductsMap] = useState({})

  useEffect(() => {
    const getAllProductsMap = async () => {
      const allProductsMap = await getAllProductsAndDocuments()
      console.log('All Products Map', allProductsMap)
      //this is where we are affecting state change.
      setAllProductsMap(allProductsMap)
    }
    getAllProductsMap()
  }, [])

  const value = { allProductsMap }

  return (
    <allProductsContext.Provider value={value}>{children}</allProductsContext.Provider>
  )
}
