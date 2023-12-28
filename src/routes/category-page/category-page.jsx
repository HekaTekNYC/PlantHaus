import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'

import { CategoriesContext } from '../../contexts/categories.context'

import './category-page.styles.scss'

const CategoryPage = () => {
  //use params gives us an object but we are goign to destructure off category only
  const { category } = useParams()
  console.log('Category', category)
  // call categoriesMap to get the associated category
  const { categoriesMap } = useContext(CategoriesContext)
  console.log('Categories Map from Category-Page:', categoriesMap)
  //grab the products from the category chosen by utilizing useState
  const [products, setProducts] = useState(categoriesMap[category] || [])

  //useeffect whenever cateogry or categoriesmap changes
  useEffect(() => {
    console.log('useEffect is working')
    setProducts(categoriesMap[category] || [])
  }, [category, categoriesMap])
  console.log('Category in CategoryPage:', category);
  console.log('Products in CategoryPage:', products);
  return (
    <>
      <div className="category-title">
        <h2>{shopTitle(category)}</h2>
      </div>
      <div className="category-container">
        {/* if products is undefined, dont render products */}
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              category={category}
              product={product}
            />
          ))}
        {products &&
          console.log('Number of products:', products && products.length)}
      </div>
    </>
  )
}
export default CategoryPage
