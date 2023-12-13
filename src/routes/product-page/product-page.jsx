import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/product'

import { CategoriesContext } from '../../contexts/categories.context'

const ProductPage = () => {
  const { category } = useParams()

  // call categoriesMap to get the associated category
  const { categoriesMap } = useContext(CategoriesContext)
  //grab the products from the category chosen by utilizing useState
  const [products, setProducts] = useState(categoriesMap[category] || [])

  // useeffect whenever cateogry or categoriesmap changes
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  // useEffect(() => {
  //   const fetchProductDetails = () => {
  //     const allProducts = Object.values(categoriesMap).flat()
  //     console.log(
  //       'all products in product page from mapping through categories',
  //       allProducts
  //     )
  //     const selectedProduct = allProducts.find(
  //       (p) => p.id === parseInt(urlName, 10)
  //     )
  //     setProducts([selectedProduct])
  //   }
  //   fetchProductDetails()
  // }, [urlName, categoriesMap])

  return (
    <>
      <div className="category-container">
        <h2>Product Page</h2>
        {/* if products is undefined, dont render products */}
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default ProductPage
