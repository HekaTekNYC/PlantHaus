import Button from '../button/Button'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  return (
    <>
      <div className="product-card-container">
        <div className="img-btn-container">
          <img src={imageUrl} alt={`${name}`} />{' '}
          <Button buttonType="inverted">Add to cart</Button>
        </div>
        <div className="footer">
          <span className="text">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </>
  )
}

export default ProductCard
