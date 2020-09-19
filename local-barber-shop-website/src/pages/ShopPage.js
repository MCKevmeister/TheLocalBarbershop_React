import React from "react";
import { Link } from "react-router-dom";
import products from "./productContent";

// Displays a product component
const ShopPage = () => (
  <>
    <h1>Shop</h1>
    {/* TODO: Breadcurmbs or equivilent */}
    {products.map((product, key) => (
      <Link key={key} to={`/product/${product.name}`}>
        <h3>{product.title}</h3>
      </Link>
    ))}
  </>
);
export default ShopPage;
