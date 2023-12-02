import { useContext } from 'react'

import { ReviewsContext } from '../../contexts/reviews.context'

import ReviewSlider from '../../components/review-slider/review-slider'

const CategoriesPreview = () => {
  const { reviewsMap } = useContext(ReviewsContext)

  return (
    <>
      {/* this is pulling out our subcategories (New Arrival, Pet Friendly, New Plant Parents) */}

      {Object.keys(reviewsMap).map((title) => {
        const reviews = reviewsMap[title]
        return <ReviewSlider key={title} title={title} reviews={reviews} />
      })}
    </>
  )
}

export default CategoriesPreview
