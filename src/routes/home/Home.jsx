import React, { useEffect, lazy, Suspense, startTransition } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'
import { reviewData } from '../../reviews-data'
import Button from '../../components/button/main-button/Button'
import { scrollToTop } from '../../utils/scrollToTop'
import './home.styles.scss'

const Commitments = lazy(() =>
  import('../../components/commitments/Commitments')
)
const DirectoriesPreview = lazy(() =>
  import('../directories-preview/directories-preview')
)
const FeaturePreview = lazy(() => import('../feature-preview/feature-preview'))
const ReviewsPreview = lazy(() => import('../reviews/reviews-preview'))

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleCategoryClick = () => {
    startTransition(() => {
      navigate('/shop/')
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [location])
  return (
    <>
      {/* Hero section */}

      <section className="hero-container">
        <div className="hero-left">
          <div className="hero-image-container">
            <picture>
              <source srcSet="/images/PH-room.webp" type="image/webp" />
              <img
                rel="preload"
                src="/images/PH-room.png"
                alt="living room full of plants"
              />
            </picture>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-plants">
            <img
              src="/images/monstera-orange.svg"
              alt="orange monstera leaf"
              className="hero-monstera"
              loading="lazy"
            />
            <img
              src="/images/long-slate.svg"
              alt="long slate green leaf"
              className="hero-long"
              loading="lazy"
            />
            <img
              src="/images/leaf-light.svg"
              alt="light green leaf"
              className="hero-leaf"
              loading="lazy"
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
      </section>
      {/* Our Commitments Section */}

      <Suspense
        fallback={<div>Loading...</div>}
        className="commitments-section"
      >
        <Commitments />
      </Suspense>

      <div className="home-container">
        {/* Best Sellers*/}
        <section className="directories-section">
          <DirectoriesPreview category="best-sellers" />
        </section>
        {/* Feature  */}
        <section className="feature-section">
          <FeaturePreview category="all-products" />
        </section>

        {/* <Reviews /> */}
        <section className="reviews-section">
          <ReviewsPreview reviews={reviewData} />
        </section>
      </div>
    </>
  )
}
export default Home
