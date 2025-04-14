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
            <h1 className="header-text">PLANT HAUS</h1>
            <p className="header-description">
              Your trusted companion for a thriving home oasis. Discover lush,
              resilient plants handpicked to transform any space into a green
              sanctuary.
            </p>
            <Button
              buttonType={'inverted'}
              onClick={() => handleCategoryClick('category')}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      {/* Our Commitments Section */}
      <div className="commitments-section">
        <Commitments />
      </div>
      <div className="home-container">
        {/* Best Sellers*/}
        <div className="directories-section">
          <DirectoriesPreview category="best-sellers" />
        </div>
        {/* Feature  */}
        <div className="feature-section">
          <FeaturePreview category="all-products" />
        </div>

        {/* <Reviews /> */}
        <div className="reviews-section">
          <ReviewsPreview />
        </div>
      </div>
    </>
  )
}
export default Home
