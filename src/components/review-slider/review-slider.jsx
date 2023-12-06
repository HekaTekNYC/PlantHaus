// import Slider from 'react-slick';
import ReviewCard from '../review-card/review-card';
// import { useMediaQuery } from 'react-responsive';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './review-slider.styles.scss';
import '../review-card/review-card.styles.scss'

const ReviewSlider = ({ reviews }) => {
  return (
    <div className="review-slider-container">
      <h2 style={{ textAlign: 'center' }}>REVIEW SLIDER</h2>
      <div className="review-card-container">
            {reviews &&
              reviews.map((review) => (
                <div key={review.id}>
                  <ReviewCard reviews={review} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
