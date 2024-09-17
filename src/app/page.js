"use client";

import React, { useState, useEffect } from "react";
import Cart from "../components/Cart.jsx";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  const handleNext = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  const handlePrev = () => {
    setSkip((prevSkip) => (prevSkip - limit >= 0 ? prevSkip - limit : 0));
  };

  const currentPage = skip / limit + 1;

  return (
    <div style={styles.pageContainer}>
      {products.length > 0 ? (
        products.map((item, index) => (
          <Cart
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
          />
        ))
      ) : (
        <div style={styles.loading}>Loading...</div>
      )}
      <div style={styles.pagination}>
        <button onClick={handlePrev} disabled={skip === 0}>
          Prev
        </button>
        <span style={styles.pageNumber}>Page {Math.floor(currentPage)}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    gap: "80px",
  },
  loading: {
    color: "gray",
    marginBottom: "20px",
  },
  pagination: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  pageNumber: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Page;
