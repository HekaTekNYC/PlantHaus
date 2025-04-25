import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Commitments from '../../components/commitments/Commitments'
import DirectoriesPreview from '../directories-preview/directories-preview'
import FeaturePreview from '../feature-preview/feature-preview'
import ReviewsPreview from '../reviews/reviews-preview'
import { reviewData } from '../../reviews-data'
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
        <div className="hero-left">
          <div className="hero-image-container">
            <picture>
              <source srcset="/images/PH-room.webp" type="image/webp" />
              <img src="/images/PH-room.png" alt="living room full of plants" />
            </picture>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-plants">
            <img
              src="/images/monstera-orange.png"
              alt="orange monstera leaf"
              className="hero-monstera"
            />
            <img
              src="/images/long-slate.png"
              alt="long slate green leaf"
              className="hero-long"
            />
            <img
              src="/images/leaf-light.png"
              alt="light green leaf"
              className="hero-leaf"
            />
          </div>

          <div className="hero-text-container">
            <div className="hero-text">
              <h1 className="header-text">PLANT HAUS</h1>
              <p className="header-description">
                Your trusted companion for a thriving home oasis. Discover lush,
                resilient plants handpicked to transform any space into a green
                sanctuary.
              </p>
              <Button onClick={() => handleCategoryClick('category')}>
                Shop Now
              </Button>
            </div>
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
          <ReviewsPreview reviews={reviewData} />
        </div>
      </div>
    </>
  )
}
export default Home
