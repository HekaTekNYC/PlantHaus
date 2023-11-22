import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPottedPlant } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";
import Slider from "../components/Slider";
import "../components/slider.styles.scss";
import "./home.styles.scss";
import zzImage1 from "../assets/zz-1.png";
import zzImage2 from "../assets/zz-2.png";
import heroImage from "../assets/styled-plants-5.png";

const Home = () => {
  //   Plants for new arrivals: Monstera, Spider, Snake, Fiddle leaf fig
  // Plants that are pet friendly prayer palm, birds nest fern, aloe,

  const zzImages = [zzImage1, zzImage2];

  return (
    <>
      {/* Hero section */}
      <div className="hero-container">
        <div className="hero-image-container">
          <img src={heroImage} alt="indoor plants" className="hero-img" />
        </div>
        <div className="hero-text-container">
          <div className="header-text">The Plant Haus</div>
          <div className="header-description">
            Your trusted companion in cultivating a thriving oasis at home. With
            an extensive array of lush botanical wonders, handpicked for their
            beauty and resilience, we empower you to transform any space into a
            verdant sanctuary with ease."
          </div>
          {/* <button></button> */}
        </div>
      </div>

      {/* Three Points of supprt section */}
      <div className="three-points-container">
        <div className="three-header"></div>
        <div className="three-points-row">
          <div className="delivery-point">
            <div className="threepoint-icon">
              <LiaShippingFastSolid size="36px" />
            </div>
            <h3 className="delivery-header">Unbeatable Quality</h3>
            <p className="delivery-info">
              Directly sourced from top-rated growers, our online plant shop
              offers an unparalleled selection of the finest quality plants at
              the most competitive prices.
            </p>
          </div>
          <div className="quality-point">
            <div className="threepoint-icon">
              <PiPottedPlant size="36px" />
            </div>

            <h3 className="quality-header">Effortless Doorstep Delivery</h3>
            <p className="quality-info">
              Experience the convenience of having your chosen plants delivered
              directly to your door when you shop with us online. Should your
              satisfaction ever waver, just let us know – we're committed to
              ensuring you're 100% happy with your purchase!
            </p>
          </div>
          <div className="online-support-point">
            <div className="threepoint-icon">
              <PiChatsCircle size="36px" />
            </div>
            <h3 className="support-header">Comprehensive Online Support</h3>
            <p className="support-info">
              Upon ordering, you'll receive a complimentary plant-parenting
              instruction card. Plus, our team of virtual plant doctors is
              always on call, providing continuous online support for your plant
              care inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals-container">
        <h2>New Arrivals</h2>
        <div className="new-arrivals-images">
          {/* <Slider images={zzImages} className="slider-img" /> */}
        </div>
      </div>

      {/* Pet Friendly Plants Section */}
      <div className="pet-friendly-container">
        <h2>Pet Friendly</h2>
        <div className="new-arrivals-images">{/* <Slider /> */}</div>
      </div>
    </>
  );
};
export default Home;
