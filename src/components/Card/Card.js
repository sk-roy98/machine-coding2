import React from "react";
import "./card.css"

const Card = ({ image, brand, title, price }) => {
  return (
    <div className="card-container" >
      <img className="card-image" src={image} alt="Product-Image" />
      <div className="card-content">
        <strong>{brand}</strong>
        <p>{title}</p>
        <div className="price-add">
          <p>₹{price}</p>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
