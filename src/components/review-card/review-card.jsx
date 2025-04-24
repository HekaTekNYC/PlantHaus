import React from 'react'
import './review-card.styles.scss'

const ReviewCard = ({ review }) => {
  const { location, reviewText, imageUrl, user } = review

  return (
    <div className="review-card-container">
      <div className="profile-image-wrapper">
        <img src={imageUrl} alt={`${user} profile`} />
      </div>

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
