import { Link } from 'react-router-dom'
import './category-card.styles.scss'

const CategoryCard = ({ product, title }) => {
  const { name, price, imageUrl } = product
  const plantName = name.toLowerCase().split(' ').join('-')
  const nameMatch = name
  const mainImg = imageUrl.img1

  //   const prices = Object.values(price)
  //   const price1 = Math.min(...prices)
  //   const price2 = Math.max(...prices)

  return (
    <>
      <Link to={`/shop/${title}`} state={{ nameMatch }}>
        <div className="catgory-card-container">
          <div className="category-card">
            <div className="category-card-img">
              {mainImg && <img src={mainImg} alt={`${name}`} />}
            </div>
            <div className="category-card-footer">
              <span className="category-card-name">{title}</span>
              {/* <span className="category-card-price">{`$${price1} - $${price2}`}</span> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CategoryCard
