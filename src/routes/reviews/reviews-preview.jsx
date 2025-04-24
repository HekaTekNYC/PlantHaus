import { useState, useEffect } from 'react'
import ReviewCard from '../../components/review-card/review-card'
import { useCardsPerPage } from '../../utils/cardsPerPage'
import './reviews-preview.styles.scss'

const ReviewsPreview = ({ reviews = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardsPerPage = useCardsPerPage()

  // Clamp activeIndex if screen resizes and the index becomes invalid
  useEffect(() => {
    const maxIndex = Math.max(reviews.length - cardsPerPage, 0)
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex)
    }
  }, [cardsPerPage, reviews.length, activeIndex])

  // Get only the reviews to show on screen
  const activeCards = reviews.slice(activeIndex, activeIndex + cardsPerPage)

  // Calculate how many positions we can scroll through
  const totalDots = Math.max(reviews.length - cardsPerPage + 1, 1)

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="reviews-preview">
      <h2 className="reviews-header">Reviews</h2>

      <div className="reviews-carousel">
        <div className="review-cards">
          {activeCards.map((review) => (
            <div key={review.id} className="review-card">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, i) => (
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
