import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/product'

import { CategoriesContext } from '../../contexts/categories.context'

const ProductPage = () => {
  const { category, productName } = useParams()
  console.log('Category:', category)
  console.log('ProductName:', productName)
  // access the category title fr

  // call categoriesMap to get the associated category
  const { categoriesMap } = useContext(CategoriesContext)
  // const allCats = Object.keys(categoriesMap).map((title) => {
  //   const products = categoriesMap[title]
  // })

  // console.log('All Categories from Product Page', allCats())
  // const category = categoriesMap[category]
  //grab the products from the category chosen by utilizing useState
  const [products, setProducts] = useState(categoriesMap[category] || [])

  // useeffect whenever cateogry or categoriesmap changes
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <div className="category-container">
        {/* if products is undefined, dont render products */}
        {products &&
          products
            .filter(
              (product) =>
                product.name.toLowerCase().split(' ').join('-') === productName
            )
            .map((product) => <Product key={product.id} product={product} />)}
      </div>
    </>
  )
}

export default ProductPage
