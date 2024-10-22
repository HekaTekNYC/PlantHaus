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
            <div className="header-text">The Plant Haus</div>
            <div className="header-description">
              Your trusted companion in cultivating a thriving oasis at home.
              With an extensive array of lush botanical wonders, handpicked for
              their beauty and resilience, we empower you to transform any space
              into a verdant sanctuary with ease.
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
        {/* Best Sellers/Pet Friendly*/}
        <div className="directories-section">
          <DirectoriesPreview category="pet-friendly" />
        </div>
        {/* Banner */}
        <div className="banner-section">
          <div className="banner-img"> </div>
          <div className="banner-btn">
            <h3>Start Your Plant Journey</h3>
            <Button
              buttonType={'inverted'}
              onClick={() => handleCategoryClick('category')}
            >
              Shop Now
            </Button>
          </div>
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
