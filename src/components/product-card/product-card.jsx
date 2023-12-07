// import { useContext } from 'react'
// import { CartContext } from '../../contexts/cart.context'
// import Button from '../button/Button'
import { Link } from 'react-router-dom'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  // const { addItemToCart } = useContext(CartContext)
  // const addProductToCart = () => addItemToCart(product)
  const mainImg = imageUrl.img1
  const prices = Object.values(price)
  const price1 = Math.min(...prices)
  const price2 = Math.max(...prices)
  return (
    <>
      <Link to={`/shop/products/${name}`}>
        <div className="product-card-container">
          <div className="product-img">
            <img src={mainImg} alt={`${name}`} />
          </div>
          <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{`$${price1} - $${price2}`}</span>
          </div>
          {/* <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button> */}
        </div>
      </Link>
    </>
  )
}

export default ProductCard
