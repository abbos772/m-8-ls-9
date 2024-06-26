import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import watch from "./img/watch.png";
import { GrSearch } from "react-icons/gr";
const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero_flex container">
        <div className="hero_text">
          <h1>
            Discover <br /> Most Suitable Watches
          </h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div className="search">
            <GrSearch />
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero_img">
          <img src={watch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
