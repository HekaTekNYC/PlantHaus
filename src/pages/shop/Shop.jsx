import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import CategoryPreview from '../../components/category-preview/category-preview'

import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  const shopTitle = (title) => {
    return title
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
  }

  return (
    <>
      <div className="shop-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview
              key={title}
              title={
                <span style={{ fontFamily: 'Cormorant Garamond' }}>
                  {shopTitle(title)}
                </span>
              }
              products={products}
            />
          )
        })}
      </div>
    </>
  )
}

export default Shop
