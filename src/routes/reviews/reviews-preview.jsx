import { useContext } from 'react'
import Reviews from '../../components/reviews/reviews'
import { ReviewsContext } from '../../contexts/reviews.context'

const ReviewsPreview = () => {
  const { reviewsMap } = useContext(ReviewsContext)

  return (
    <>
      {Object.entries(reviewsMap).map(([title, reviewList]) => (
        <Reviews key={title} title={title} reviews={reviewList} />
      ))}
    </>
  )
}

export default ReviewsPreview
