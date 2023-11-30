import { createContext, useState, useEffect } from 'react'
import {
  getCategoriesAndDocuments,
  // getCategoryAndDocuments,
} from '../utils/firebase/firebase.utils.jsx'

export const CategoriesContext = createContext({
  categoriesMap: {},
  // categoryMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  // const [categoryMap, setCategoryMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      console.log('categories Map', categoriesMap)
      setCategoriesMap(categoriesMap)
    }
    getCategoriesMap()
  }, [])

  // useEffect(() => {
  //   const getCategoryMap = async () => {
  //     const categoryMap = await getCategoryAndDocuments()
  //     console.log('category Map', categoryMap)
  //     setCategoryMap(categoryMap)
  //   }
  //   getCategoryMap()
  // }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
