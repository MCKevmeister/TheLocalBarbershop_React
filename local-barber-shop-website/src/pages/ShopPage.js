import React from "react";
import { Link } from "react-router-dom";
import products from "./productContent";

const ShopPage = () => (
  <>
    <h1>Shop</h1>
    <p>TODO: Breadcurmbs or equivilent</p>
    {products.map((product, key) => (
      <Link key={key} to={`/product/${product.name}`}>
        <h3>{product.title}</h3>
      </Link>
    ))}
  </>
);
export default ShopPage;
