import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'
import { scrollToTop } from '../../utils/scrollToTop'
import { CategoriesContext } from '../../contexts/categories.context'

import './category-page.styles.scss'

const CategoryPage = () => {
  const { category } = useParams()

  const { categoriesMap } = useContext(CategoriesContext)

  const [products, setProducts] = useState(categoriesMap[category] || [])

  useEffect(() => {
    setProducts(categoriesMap[category] || [])
    scrollToTop()
  }, [category, categoriesMap])

  return (
    <>
      <div className="category-page-container">
        <h2 className="category-title">{shopTitle(category)}</h2>
        <div className="category-container">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default CategoryPage
