import React from "react";
import "./newArrivals.styles.scss";
import Monstera from "../assets/monstera-4.png";
import SpiderPlant from "../assets/spider-plant-4.png";
import SnakePlant from "../assets/snake-plant-3.png";
import FiddleLeaf from "../assets/fiddle-leaf-fig-3.png";

const NewArrivals = () => {
  return (
    <>
      <div className="new-arrivals-container">
        <h2>New Arrivals</h2>
        <div className="new-arrivals-images">
          <img src={Monstera} alt={"monstera"} />
          <img src={SpiderPlant} alt={"spider plant"} />
          <img src={SnakePlant} alt={"snake plant"} />
          <img src={FiddleLeaf} alt={"fiddle leaf fig"} />
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
