import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card'

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
        {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            <h2 className="new-arrivals-header">{shopTitle(title)}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default Shop
