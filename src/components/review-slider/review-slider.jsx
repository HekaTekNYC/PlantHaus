import Slider from 'react-slick'
import ReviewCard from '../review-card/review-card'
// import { TiStarHalfOutline } from 'react-icons/ti'
// import { TiStarFullOutline } from 'react-icons/ti'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './review-slider.styles.scss'

const ReviewSlider = ({ reviews }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <div className="review-slider-container">
      <h2 style={{textAlign: "center"}}>REVIEW SLIDER</h2>
      <Slider {...settings}>
        {/* <TiStarFullOutline /> */}
        {/* <TiStarHalfOutline /> */}
        {reviews &&
          reviews.map((review) => (
            <ReviewCard key={review.id} reviews={review} />
          ))}
      </Slider>
    </div>
  )
}

export default ReviewSlider

/* this is pulling out our reviews

// {Object.keys(reviewsMap).map((review) => {
//   return <ReviewCards key={review.id} review={review}/>
// })}
*/
