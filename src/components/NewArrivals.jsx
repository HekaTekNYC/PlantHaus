import React from 'react'
import './newArrivals.styles.scss'
import Monstera from '../assets/monstera-4.png'
import SpiderPlant from '../assets/spider-plant-4.png'
import SnakePlant from '../assets/snake-plant-3.png'
import FiddleLeaf from '../assets/fiddle-leaf-fig-3.png'

const NewArrivals = () => {
  return (
    <>
      <div className="new-arrivals-container">
        <h2>New Arrivals</h2>
        <div className="new-arrivals-products">
          <div className="new-arrivals-product">
            <img src={Monstera} alt={'monstera'} />
            <div className="new-arrivals-footer">
              <div className="new-arrivals-text">Large Monstera Deliciosa</div>
              <div className="new-arrivals-price">$228</div>
            </div>
          </div>
          <div className="new-arrivals-product">
            <img src={SpiderPlant} alt={'spider plant'} />
            <div className="new-arrivals-footer">
              <div className="new-arrivals-text">Spider Plant Variegated</div>
              <div className="new-arrivals-price">$38 - $68 </div>
            </div>
          </div>
          <div className="new-arrivals-product">
            <img src={SnakePlant} alt={'snake plant'} />
            <div className="new-arrivals-footer">
              <div className="new-arrivals-text">Snake Plant Laurentii</div>
              <div className="new-arrivals-price">$28 - $48</div>
            </div>
          </div>
          <div className="new-arrivals-product">
            <img src={FiddleLeaf} alt={'fiddle leaf fig'} />
            <div className="new-arrivals-footer">
              <div className="new-arrivals-text">Fiddle Leaf Fig</div>
              <div className="new-arrivals-price">$78 - $248</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewArrivals
