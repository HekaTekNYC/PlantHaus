import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card'

import './directory-preview.styles.scss'

const DirectoryPreview = ({ title, products }) => {
  const shopTitle = (title) => {
    return title
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
  }
  return (
    <div className="directory-preview-container">
      <h2 className="directory-title">
        <Link to={`/shop/${title}`}>{shopTitle(title)}</Link>
      </h2>
      <div className="directory-preview">
        {products
          //filter out anything but the first four products. The underscore ignores the product.
          //_ titles and idx would be for the array of plants we want to display on the screen.
          .filter((_, idx) => idx < 4)
          //after we filter the 4 out we can then map through them
          .map((product) => (
            <div>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default DirectoryPreview