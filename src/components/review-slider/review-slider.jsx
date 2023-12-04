import Slider from 'react-slick';
import ReviewCard from '../review-card/review-card';
import { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './review-slider.styles.scss';
import '../review-card/review-card.styles.scss'

const ReviewSlider = ({ reviews }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isMobile ? 1 : 3,
          slidesToScroll: isMobile ? 1 : 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  };

  return (
    <div className="review-slider-container">
      <h2 style={{ textAlign: 'center' }}>REVIEW SLIDER</h2>
      <div className="review-card-container">
        {isMobile ? (
          <Slider {...settings}>
            {reviews &&
              reviews.map((review) => (
                <div key={review.id}>
                  <ReviewCard reviews={review} />
                </div>
              ))}
          </Slider>
        ) : (
          reviews &&
          reviews.map((review) => (
            <div key={review.id}>
              <ReviewCard reviews={review} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSlider;
