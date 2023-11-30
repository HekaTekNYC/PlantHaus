import React from 'react'
import Commitments from '../../components/Commitments'
// import DirectoriesPreview from '../directories-preview/directories-preview'
import NewArrivals from '../../components/NewArrivals'
import PetFriendly from '../../components/PetFriendly'
import Reviews from '../../components/reviews/Reviews'
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
            {/* <button></button> */}
          </div>
        </div>
      </div>

      {/* Our Commitments Section */}
      <Commitments />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Pet Friendly Plants Section */}
      <PetFriendly />

      {/* Reviews */}
      <Reviews />
    </>
  )
}
export default Home
