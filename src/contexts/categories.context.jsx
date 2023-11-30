import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      console.log('categories Map', categoriesMap)
      //this is where we are affecting state change.
      setCategoriesMap(categoriesMap)
    }
    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
