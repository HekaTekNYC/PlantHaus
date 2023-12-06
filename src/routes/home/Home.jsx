import React from 'react'

import Commitments from '../../components/commitments/Commitments'
import DirectoriesPreview from '../directories-preview/directories-preview'
import Reviews from '../reviews/reviews'

import Button from '../../components/button/Button'

import heroImage from '../../assets/styled-plants-5.png'
import './home.styles.scss'

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="home-container">
        <div className="hero-container">
          <div className="hero-image-container">
            <img src={heroImage} alt="indoor plants" className="hero-img" />
          </div>
          <div className="hero-text-container">
            <div className="header-text">The Plant Haus</div>
            <div className="header-description">
              Your trusted companion in cultivating a thriving oasis at home.
              With an extensive array of lush botanical wonders, handpicked for
              their beauty and resilience, we empower you to transform any space
              into a verdant sanctuary with ease.
            </div>
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>

      {/* Our Commitments Section */}
      <Commitments />
      {/* New Arrivals */}
      <DirectoriesPreview category="new_arrivals" />

      {/* Pet Friendly */}
      <DirectoriesPreview category="pet_friendly" />
      {/* <DirectoriesPreview category="plant_page" /> */}
      {/* <DirectoriesPreview category="all_products" /> */}

      {/* Reviews */}

      <Reviews />
    </>
  )
}
export default Home
