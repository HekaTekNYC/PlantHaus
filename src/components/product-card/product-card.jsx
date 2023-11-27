import { useContext } from 'react'
import Button from '../button/Button'
import './product-card.styles.scss'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <>
      <div className="product-card-container">
        <div className="img-btn-container">
          <img src={imageUrl} alt={`${name}`} />{' '}
          <Button buttonType="inverted" onClick={addProductToCart}>
            Add to cart
          </Button>
        </div>
        <div className="footer">
          <span className="text">{name}</span>
          <span className="price">${price}</span>
        </div>
      </div>
    </>
  )
}

export default ProductCard
