import ReviewCard from '../../components/review-card/review-card'
import './reviews-preview.styles.scss'

const ReviewsPreview = ({ reviews = [] }) => {
  console.log('review data pass down', reviews)
  return (
    <div className="reviews-preview">
      <h2 className="reviews-header">Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsPreview
