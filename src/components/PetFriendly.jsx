import React from "react";
import Peperomia from "../assets/peperomia-3.png";
import PrayerPalm from "../assets/prayer-palm-1.png";
import BirdsNest from "../assets/birds-nest-fern-1.png";
import Aloe from "../assets/aloe-vera-3.png";
import "./petFriendly.styles.scss";

const PetFriendly = () => {
  return (
    <>
      <div className="pet-friendly-container">
        <h2>Pet Friendly Plants</h2>
        <div className="pet-friendly-images">
          <img src={Peperomia} alt={"peperomia"} />
          <img src={PrayerPalm} alt={"prayer palm"} />
          <img src={BirdsNest} alt={"birst nest fern"} />
          <img src={Aloe} alt={"aloe vera"} />
        </div>
      </div>
    </>
  );
};

export default PetFriendly;
