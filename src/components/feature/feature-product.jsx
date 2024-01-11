import Button from '../button/main-button/Button'
import shopTitle from '../../utils/shopTitle.utils'
import './feature-product.styles.scss'

const FeatureProduct = ({ title, product }) => {
  const {
    name,
    price,
    imageUrl,
    description,
    care,
    icons,
    pro_tip,
    size_description,
    thumbnailUrl,
    latin_binomial,
  } = product

  return (
    <>
      <div className="feature-container">
        <div className="feature-img-container">
          <div className="feature-img-col">
            <img src={imageUrl} alt={`${name}`} />
          </div>
        </div>
        <div className="feature-info-container">
          <div className="feature-header">
            <span className="feature-name">{name}</span>
            <div className="feature-latin">{latin_binomial}</div>
            <div className="feature-price">${price[0]}</div>
          </div>
          <div className="feature-size-container">
            <div className="feature-size-subheader">Plant Size:</div>
            <div className="feature-size-btns"></div>

            <div className="feature-size-description">
              {size_description &&
                Object.entries(size_description).map(([size, value]) => (
                  <div className="size-description" key={size}>{`${shopTitle(
                    size
                  )}: ${value}`}</div>
                ))}
            </div>

            <div className="feature-cart-add">
              <Button buttonType="checkout">Add to cart</Button>
            </div>
          </div>
        </div>
        <div className="styled-line"></div>
      </div>
    </>
  )
}

export default FeatureProduct
