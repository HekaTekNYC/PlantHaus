import React from 'react'
import Peperomia from '../assets/peperomia-3.png'
import PrayerPalm from '../assets/prayer-palm-1.png'
import BirdsNest from '../assets/birds-nest-fern-1.png'
import Aloe from '../assets/aloe-vera-3.png'
import './petFriendly.styles.scss'

const PetFriendly = () => {
  return (
    <>
      <div className="pet-friendly-container">
        <h2>Pet Friendly Plants</h2>
        <div className="pet-friendly-products">
          <div className="pet-friendly-product">
            <img src={Peperomia} alt={'peperomia'} />
            <div className="pet-friendly-info">
              <div className="pet-friendly-text">Peperomia Raindrop</div>
              <div className="pet-friendly-price">$38</div>
            </div>
          </div>
          <div className="pet-friendly-product">
            <img src={PrayerPalm} alt={'prayer palm'} />
            <div className="pet-friendly-info">
              <div className="pet-friendly-text">Maranta Red</div>
              <div className="pet-friendly-price">$38</div>
            </div>
          </div>
          <div className="pet-friendly-product">
            <img src={BirdsNest} alt={'birst nest fern'} />
            <div className="pet-friendly-info">
              <div className="pet-friendly-text">Bird’s Nest Fern</div>
              <div className="pet-friendly-price">$38 - $48</div>
            </div>
          </div>
          <div className="pet-friendly-product">
            <img src={Aloe} alt={'aloe vera'} />
            <div className="pet-friendly-info">
              <div className="pet-friendly-text">Aloe Vera</div>
              <div className="pet-friendly-price">$30 - $38</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PetFriendly
