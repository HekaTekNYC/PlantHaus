import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPottedPlant, PiChatsCircle } from "react-icons/pi";
import "../components/slider.styles.scss";
import "./home.styles.scss";
import heroImage from "../assets/styled-plants-5.png";
import Monstera from "../assets/monstera-4.png";
import SpiderPlant from "../assets/spider-plant-4.png";
import SnakePlant from "../assets/snake-plant-3.png";
import FiddleLeaf from "../assets/fiddle-leaf-fig-3.png";
import Peperomia from "../assets/peperomia-3.png";
import PrayerPalm from "../assets/prayer-palm-1.png";
import BirdsNest from "../assets/birds-nest-fern-1.png";
import Aloe from "../assets/aloe-vera-3.png";
import Blob1 from "../assets/blobs/Blob1";

const Home = () => {
  const pointsData = [
    {
      icon: <LiaShippingFastSolid size={40} />,
      header: "Unbeatable Quality",
      info: "Directly sourced from top-rated growers, our online plant shop offers an unparalleled selection of the finest quality plants at the most competitive prices.",
      svg: <Blob1 />,
    },
    {
      icon: <PiPottedPlant size={40} />,
      header: "Effortless Doorstep Delivery",
      info: "Experience the convenience of having your chosen plants delivered directly to your door when you shop with us online. Should your satisfaction ever waver, just let us know – we're committed to ensuring you're 100% happy with your purchase!",
      svg: <Blob1 />,
    },
    {
      icon: <PiChatsCircle size={40} />,
      header: "Comprehensive Online Support",
      info: "Upon ordering, you'll receive a complimentary plant-parenting instruction card. Plus, our team of virtual plant doctors is always on call, providing continuous online support for your plant care inquiries.",
      svg: <Blob1 />,
    },
  ];

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
            verdant sanctuary with ease.
          </div>
          {/* <button></button> */}
        </div>
      </div>

      {/* Three Points of supprt section */}
      <div className="three-points-container">
        <div className="three-header">Our Commitment</div>
        <div className="three-points-row ">
          {pointsData.map((point, index) => (
            <div className={`points point-${index}`} key={index}>
              <div className="point-blob">{point.svg}</div>
              <div className="point-icon">{point.icon}</div>
              <h3 className="point-header">{point.header}</h3>
              <p className="point-info">{point.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals-container">
        <h2>New Arrivals</h2>
        <div className="new-arrivals-images">
          <img src={Monstera} alt={"monstera"} />
          <img src={SpiderPlant} alt={"spider plant"} />
          <img src={SnakePlant} alt={"snake plant"} />
          <img src={FiddleLeaf} alt={"fiddle leaf fig"} />
        </div>
      </div>

      {/* Pet Friendly Plants Section */}
      <div className="pet-friendly-container">
        <h2>Pet Friendly Plants</h2>
        <div className="pet-friendly-images">
          <img src={Peperomia} alt={"peperomia"} />
          <img src={PrayerPalm} alt={"prayer palm"} />
          <img src={BirdsNest} alt={"birst nest fern"} />
          <img src={Aloe} alt={"aloe vera"} />
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-container"></div>
    </>
  );
};
export default Home;
