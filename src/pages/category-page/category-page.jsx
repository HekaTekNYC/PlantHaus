import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'

import { CategoriesContext } from '../../contexts/categories.context'

import './category-page.styles.scss'

const CategoryPage = () => {
  //use params gives us an object but we are goign to destructure off category only
  const { category } = useParams()
  // call categoriesMap to get the associated category
  const { categoriesMap } = useContext(CategoriesContext)
  //grab the products from the category chosen by utilizing useState
  const [products, setProducts] = useState(categoriesMap[category])

  //useeffect whenever cateogry or categoriesmap changes
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <div className="category-container">
        <h2 className="category-title">{category}</h2>
        {/* if products is undefined, dont render products */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}
export default CategoryPage

/* <>
const WHATEVER_PAGE =() => {
const {categoriesMap } = useContext(CategoriesContext)

return (
  Object.keys(categoriesMap).map((title) => {
    < key={title}>
    <h2>{title}</h2>
    <div className='products-container'>
    {categoriesMap[title].map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    </div>
    </>
  ))}
  </>
  )
    }
 */
