import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'

import { CategoriesContext } from '../../contexts/categories.context'

import './category-page.styles.scss'

const CategoryPage = () => {
  //use params gives us an object but we are goign to destructure off category only
  const { category } = useParams()
  // console.log('Category useParams in Category Page', category)
  // call categoriesMap to get the associated category
  const { categoriesMap } = useContext(CategoriesContext)
  const categoryTitle = categoriesMap;
  console.log('categoryTitle', categoryTitle)
   
  //grab the products from the category chosen by utilizing useState
  const [products, setProducts] = useState(categoriesMap[category] || [])
  // const products = categoriesMap[category] || []

  //useeffect whenever cateogry or categoriesmap changes
  useEffect(() => {

    setProducts(categoriesMap[category] || [])
  }, [category, categoriesMap])

  return (
    <>
      <div className="category-title">
        <h2>{shopTitle(category)}</h2>
      </div>
      <div className="category-container">
              {/* this is pulling out our subcategories (New Arrival, Pet Friendly, New Plant Parents) */}
      {/* {Object.keys(categoriesMap).map((title) => {
        //the mapping = top level category such as new arrival
        const products = categoriesMap[title] // each individual categories items with all of the products details inside
        // console.log('products in Categories Preview:', products)
        return <ProductCard key={title} title={title} products={products} />
      })} */}
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
