import React from "react";

const ProductPage = ({ match }) => {
  const product = match.params.product;
  return (
    <>
      <h1>Shop</h1>
      <h2>A modern day barbershop for todays gentleman of lesiure</h2>
      <p>This is the {product} page</p>
    </>
  );
};
export default ProductPage;
