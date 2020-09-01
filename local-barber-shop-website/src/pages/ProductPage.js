import React from "react";
import productContent from "./productContent";

const ProductPage = ({ match }) => {
  const name = match.params.product;
  const product = productContent.find((product) => product.name === name);

  if (!product) return <h1>Product does not exist!</h1>;
  else
    return (
      <>
        <h1>{product.title}</h1>
        {product.description.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        {product.price.map((dollars, key) => (
          <p key={key}>${dollars}</p>
        ))}
      </>
    );
};
export default ProductPage;
