import React from "react";
import "./Main.css";
import man from "./img/man.png";
import man2 from "./img/man2.png";
import mii from "./img/mii.png";
import { Rating } from "@mui/material";
import { GrSearch } from "react-icons/gr";
const Main = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="main_text">
          <h4>Here are our some of the best clients.</h4>
          <h1>What People Say About Us</h1>
        </div>
        <div className="boxes">
          <div className="box">
            <img src={man} alt="" />
            <div className="box1">
              <h1>Hamza Faizi</h1>
              <p>
                Don’t waste time, just order! This <br /> is the best website to
                puschase <br /> smart watches.
              </p>
              <Rating />
            </div>
          </div>
          <div className="box">
            <div className="box">
              <img src={man2} alt="" />
              <div className="box1">
                <h1>Hafiz Huzaifa</h1>
                <p>
                  I’ve been purchasing smart <br /> watches of Mohid for a long
                  time. <br /> All the products are good quality.
                </p>
                <Rating />
              </div>
            </div>
          </div>
        </div>
        <div className="box_watch">
          <div className="box_text">
            <h2>Subscribe To Newsletter</h2>
            <p>Get free guide about smart watches daily. </p>
            <div className="search">
              <GrSearch />
              <input type="text" placeholder="Find the best brands" />
              <button>Search</button>
            </div>
          </div>
          <div>
            <img src={mii} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
