import React from "react";
import "./Watch.css";
import apple from "./img/apple1.png";
import fit from "./img/fit.png";
import mi from "./img/mi.png";
const Watch = () => {
  return (
    <div className="Watches container">
      <div className="watch">
        <img src={apple} alt="" />
        <div className="watch_text">
          <h1>Apple</h1>
          <p>
            Apple is one of the <br /> most famous smart <br /> watches
            providing <br /> company.
          </p>
        </div>
      </div>
      <div className="watch">
        <img src={fit} alt="" />
        <div className="watch_text">
          <h1>Xiaomi</h1>
          <p>
            Xiaomi smart watches <br /> are produced by MI <br /> company.
          </p>
        </div>
      </div>
      <div className="watch">
        <img src={fit} alt="" />
        <div className="watch_text">
          <h1>FitBit</h1>
          <p>
            FitBit smart watches <br /> are best for there <br /> health and
            fitness <br /> features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
