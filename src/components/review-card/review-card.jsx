import React from 'react'
import './review-card.styles.scss'

const ReviewCard = ({ review }) => {
  const { location, reviewText, png, webp, user } = review

  return (
    <div className="review-card-container">
      <picture className="profile-image-wrapper">
        <source srcSet={webp} type="image/webp" />
        <img src={png} alt={`${user} profile`} loading="lazy" />
      </picture>

      <div className="review-card">
        <div className="user-review">
          <p>{reviewText}</p>
        </div>

        <div className="review-user-info-footer">
          <div className="review-user">{user}</div>
          <div className="review-location">
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
