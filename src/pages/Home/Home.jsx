import React, { useState } from "react";
import { useGetProductsQuery } from "../../context/api/ProductApi";
import { Pagination, Box } from "@mui/material";
import "./Home.css";
import { Rating } from "@mui/material";
const Home = () => {
  const perPageCount = 6;
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);
  const { data } = useGetProductsQuery({ limit: perPageCount, page });
  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };
  return (
    <div>
      <div className="wrapper">
        {data?.data?.products?.map((product) => (
          <div className="card" key={product.id}>
            <div className="card_img">
              <img src={product.urls[0]} width={250} alt="" />
            </div>
            <div className="text">
              <h2>{product.title}</h2>
              <Rating />
              <div className="old">
                <h4 className="old_p">${product.price}</h4>
                <h3>${product.price / 2}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}
      >
        <Pagination
          onChange={handleChangePagination}
          count={10}
          page={page}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default Home;
