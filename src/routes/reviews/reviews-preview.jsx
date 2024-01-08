import { useContext } from 'react'
import Reviews from '../../components/reviews/reviews'
import { ReviewsContext } from '../../contexts/reviews.context'

const ReviewsPreview = () => {
  const { reviewsMap } = useContext(ReviewsContext)

  return (
    <>
      {/* this is pulling out our subcategories (New Arrival, Pet Friendly, New Plant Parents) */}

      {Object.keys(reviewsMap).map((title) => {
        const reviews = reviewsMap[title]
        return <Reviews key={title} title={title} reviews={reviews} />
      })}
    </>
  )
}

export default ReviewsPreview
