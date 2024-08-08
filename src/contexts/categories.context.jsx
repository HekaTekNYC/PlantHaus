import { createContext, useState, useEffect } from 'react'
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from '../utils/firebase/firebase.utils.jsx'
import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
  loading: true,
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoriesMap = await getCategoriesAndDocuments()
        setCategoriesMap(categoriesMap)
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setLoading(false) // Set loading to false whether success or error
      }
    }

    getCategoriesMap()
  }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()

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

//comments
