import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  const shopTitle = (title) => {
    return title
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
  }
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={`${title}`}>
          {shopTitle(title)}
        </Link>
      </h2>
      <div className="preview">
        {products
          //filter out anything but the first four products. The underscore ignores the product.
          //_ titles and idx would be for the array of plants we want to display on the screen.
          .filter((_, idx) => idx < 4)
          //after we filter the 4 out we can then map through them
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
