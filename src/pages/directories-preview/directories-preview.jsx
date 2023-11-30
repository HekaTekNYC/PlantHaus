import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import DirectoryPreview from '../../components/directory-preview/directory-preview'

const DirectoriesPreview = ({ category }) => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {/* this is pulling out our subcategories (New Arrival, Pet Friendly, New Plant Parents) */}

      {Object.keys(categoriesMap)
        .filter((title) => title === category)
        .map((title) => {
          const products = categoriesMap[title]
          return (
            <DirectoryPreview key={title} title={title} products={products} />
          )
        })}
    </>
  )
}

export default DirectoriesPreview
