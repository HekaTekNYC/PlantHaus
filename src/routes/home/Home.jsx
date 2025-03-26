import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Commitments from '../../components/commitments/Commitments'
import DirectoriesPreview from '../directories-preview/directories-preview'
import FeaturePreview from '../feature-preview/feature-preview'
import ReviewsPreview from '../reviews/reviews-preview'
import Button from '../../components/button/main-button/Button'
import { scrollToTop } from '../../utils/scrollToTop'

import './home.styles.scss'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleCategoryClick = () => {
    navigate(`/shop/`)
  }

  useEffect(() => {
    scrollToTop()
  }, [location])
  return (
    <>
      {/* Hero section */}

      <div className="hero-container">
        <div className="hero-image-container">
          <div className="overlay"></div>
        </div>
        <div className="hero-text-container">
          <div className="hero-text">
            <div className="header-text">PLANT HAUS</div>
            <div className="header-description">
              Your trusted companion for a thriving home oasis. Discover lush,
              resilient plants handpicked to transform any space into a green
              sanctuary.
            </div>
            <Button
              buttonType={'inverted'}
              onClick={() => handleCategoryClick('category')}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div className="home-container">
        {/* Our Commitments Section */}
        <div className="commitments-section">
          <Commitments />
        </div>
        {/* Best Sellers*/}
        <div className="directories-section">
          <DirectoriesPreview category="pet-friendly" />
        </div>
        {/* Feature  */}
        <div className="feature-container">
          <FeaturePreview category="all-products" />
        </div>

        {/* <Reviews /> */}
        <div className="reviews-container">
          <ReviewsPreview />
        </div>
      </div>
    </>
  )
}
export default Home
