import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'
import { BsArrowRight } from 'react-icons/bs'
import './directory-preview.styles.scss'

const DirectoryPreview = ({ title, products }) => {
  return (
    <div className="directory-preview-container">
      <div className="directory-preview-header">
        <Link to={`/shop/${title}`}>
          <h3 className="directory-title">{shopTitle(title)}</h3>
        </Link>
        <div className="view-text-container">
          <Link to={`/shop/${title}`}>
            <div className="view-align">
              <p>View More</p>
              <div className="arrow">
                <BsArrowRight />
              </div>
            </div>
            <div className="styled-line-under"></div>
          </Link>
        </div>
      </div>
      <div className="directory-preview">
        {products.slice(0, 4).map((product, index) => (
          <div className="product-wrapper" key={product.id} data-index={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DirectoryPreview
