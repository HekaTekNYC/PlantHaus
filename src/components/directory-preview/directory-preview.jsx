import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'
import { BsArrowRight } from 'react-icons/bs'
import './directory-preview.styles.scss'

const DirectoryPreview = ({ title, products }) => {
  const featuredIds = [14, 13, 15, 8]

  const productMap = new Map(products.map((product) => [product.id, product]))
  return (
    <div className="directory-preview-container">
      <div className="directory-preview-header">
        <Link to={`/shop/${title}`}>
          <h3 className="directory-title">{shopTitle(title)}</h3>
        </Link>
        <div className="view-text-container">
          <Link to={`/shop/${title}`}>
            <p>
              View More
              <span className="arrow">
                <BsArrowRight />
              </span>
            </p>
            <div className="styled-line-under"></div>
          </Link>
        </div>
      </div>
      <div className="directory-preview">
        {featuredIds
          .map((id) => productMap.get(id))
          .filter(Boolean)
          .map((product, index) => (
            <div
              className="product-wrapper"
              key={product.id}
              data-index={index}
            >
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default DirectoryPreview
