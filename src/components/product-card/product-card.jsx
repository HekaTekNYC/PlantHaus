import { Link } from 'react-router-dom'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, stars, reviews, latin_binomial } = product
  const plantName = name.toLowerCase().split(' ').join('-')
  const nameMatch = name
  const mainImg = imageUrl.img1

  const prices = Object.values(price)
  const price1 = Math.min(...prices)
  const price2 = Math.max(...prices)

  return (
    <>
      <Link to={`/shop/product/${plantName}`} state={{ nameMatch }}>
        <div className="product-card-container">
          <div className="product-card-img">
            {mainImg && <img src={mainImg} alt={`${name}`} />}
          </div>
          <div className="footer">
            <div className="name">{name}</div>
            <div className="latin">{latin_binomial}</div>
            <div className="product-reviews">
              <div className="stars">
                {Array.from({ length: stars }).map((_, i) => (
                  <img
                    key={i}
                    src="/images/star.svg"
                    alt="star"
                    className="star-img"
                  />
                ))}
              </div>{' '}
              <span className="reviews-num">
                {reviews} {reviews === 1 ? 'review' : 'reviews'}
              </span>
            </div>
            <div className="price">{`$${price1} - $${price2}`}</div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
