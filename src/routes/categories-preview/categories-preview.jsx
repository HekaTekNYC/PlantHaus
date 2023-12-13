import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import CategoryPreview from '../../components/category-preview/category-preview'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {/* this is pulling out our subcategories (New Arrival, Pet Friendly, New Plant Parents) */}
      {Object.keys(categoriesMap).map((title) => {
        //the mapping = top level category such as new arrival
        const products = categoriesMap[title] // each individual categories items with all of the products details inside
        console.log('products in Categories Preview:', products)
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  )
}

export default CategoriesPreview
