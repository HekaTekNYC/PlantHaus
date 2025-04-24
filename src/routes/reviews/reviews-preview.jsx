import { useState } from 'react'
import ReviewCard from '../../components/review-card/review-card'
import './reviews-preview.styles.scss'

const ReviewsPreview = ({ reviews = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="reviews-preview">
      <h2 className="reviews-header">Reviews</h2>

      <div className="reviews-carousel">
        <div className="review-cards">
          <ReviewCard review={reviews[activeIndex]} />
        </div>
        <div className="carousel-dots">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewsPreview
