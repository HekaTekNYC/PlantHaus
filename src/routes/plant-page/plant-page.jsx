import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'

import { CategoriesContext } from '../../contexts/categories.context'


const PlantPage = () => {
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
      {/* if products is undefined, dont render products */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </>
  )
}

export default PlantPage





