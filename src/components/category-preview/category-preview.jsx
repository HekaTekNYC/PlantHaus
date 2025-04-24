import { Link } from 'react-router-dom'
import shopTitle from '../../utils/shopTitle.utils'
import ProductCard from '../product-card/product-card'
import { BsArrowRight } from 'react-icons/bs'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <div className="category-preview-container">
        <div className="category-preview-header">
          <Link className="category-preview-title" to={`/shop/${title}`}>
            <h3>{shopTitle(title)}</h3>
          </Link>
          <div className="view-more-container">
            <Link to={`/shop/${title}`}>
              <div className="view-more-text">
                <p>View More</p>
                <div className="view-more-arrow">
                  <BsArrowRight />
                </div>
              </div>
              <div className="styled-line-under"></div>
            </Link>
          </div>
        </div>

        <div className="category-preview">
          {products.slice(0, 4).map((product, index) => (
            <div
              className="category-product-wrapper"
              key={product.id}
              data-index={index}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryPreview
