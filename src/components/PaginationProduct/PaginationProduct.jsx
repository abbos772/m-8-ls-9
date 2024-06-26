import React from "react";
import "./Pagi.css";
import Home from "../../pages/Home/Home";
const PaginationProduct = () => {
  return (
    <div className="container">
      <div className="pagies">
        <div className="pagi_text">
          <h4>Find your favourite smart watch.</h4>
          <h1>Our Latest Products</h1>
        </div>
        <div className="pagi_product">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default PaginationProduct;
