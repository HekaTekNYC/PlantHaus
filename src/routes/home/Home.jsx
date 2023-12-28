import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Commitments from '../../components/commitments/Commitments'
import DirectoriesPreview from '../directories-preview/directories-preview'
import Reviews from '../reviews/reviews'

import Button from '../../components/button/Button'

import heroImage from '../../assets/styled-plants-5.png'
import './home.styles.scss'

const Home = () => {
  const {category} = useParams();
  const navigate = useNavigate()

  const handleCategoryClick = () => {
    navigate(`/shop/${category}`)
  }
  

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
            <Button onClick={() => handleCategoryClick(category)}>Shop Now</Button>

            {/* <Button>Shop Now</Button> */}
          </div>
        </div>
      </div>

      {/* Our Commitments Section */}
      <Commitments />

      {/* Best Sellers*/}

      <DirectoriesPreview category="best-sellers" />

      {/* Feature  */}

      {/* Reviews */}

      <div className="feature-container"></div>

      {/* <Reviews /> */}
    </>
  )
}
export default Home
