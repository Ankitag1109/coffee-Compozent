import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div
        className="product-image"
        style={{
          background: `url('${product.image}') center/cover no-repeat`,
        }}
      ></div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.sub_title}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;