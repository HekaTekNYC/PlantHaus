import './review-card.styles.scss'

const ReviewCard = ({ reviews }) => {
  const { location, review, imageUrl, user } = reviews

  return (
    <>
      <div className="review-container">
        <div className="review-card">
          <div className="user-info">
            <h3>{user}</h3>
            <h3>{location}</h3>
            <p>{review}</p>
            <div className="profile-picture">
              <img src={imageUrl} alt={`${imageUrl}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewCard
