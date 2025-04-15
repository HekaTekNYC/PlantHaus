import React from 'react'
import './review-card.styles.scss'

const ReviewCard = ({ reviews }) => {
  const { location, review, imageUrl, user } = reviews

  return (
    <div className="review-card-container">
      <div className="profile-image-wrapper">
        <img src={imageUrl} alt={`${user} profile`} />
      </div>

      <div className="review-card">
        <div className="user-review">
          <p>{review}</p>
        </div>

        <div className="review-user-info-footer">
          <div className="review-user">{user}</div>
          <div className="review-location"><em>{location}</em></div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
